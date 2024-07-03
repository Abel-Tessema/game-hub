import {FetchResponse} from "./useData.ts";
import {Platform} from "./useGames.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

const usePlatforms = () => useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then(response => response.data.results),
    staleTime: 24 * 60 * 60 * 1_000,
    initialData: platforms,
});

export default usePlatforms;