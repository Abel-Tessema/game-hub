import genres from "../data/genres.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then(response => response.data.results),
    staleTime: 24 * 60 * 60 * 1_000,
    initialData: genres
});

export default useGenres;