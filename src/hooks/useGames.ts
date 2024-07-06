import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client.ts";
import ms from "ms";
import useGameQueryStore from "../gameQueryStore.ts";
import {Game} from "../entities/Game.ts";

export const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore(selector => selector.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                ordering: gameQuery.sortOrder,
                page: pageParam,
                page_size: gameQuery.pageSize,
                parent_platforms: gameQuery.platformId,
                search: gameQuery.searchText
            }
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) =>
            lastPage.next ? allPages.length + 1 : undefined,
        staleTime: ms("24 hours")
    });
}

export default useGames;