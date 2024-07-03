import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then(response => response.data.results),
    staleTime: 24 * 60 * 60 * 1_000,
    initialData: platforms,
});

export default usePlatforms;