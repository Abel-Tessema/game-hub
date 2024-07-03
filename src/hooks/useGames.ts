import {GameQuery} from "../App.tsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import ApiClient, {FetchResponse} from "../services/api-client.ts";

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
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
    staleTime: 24 * 60 * 60 * 1_000
});

export default useGames;