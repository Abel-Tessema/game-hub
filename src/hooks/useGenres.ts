import genres from "../data/genres.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1_000,
    initialData: {results: genres}
});

export default useGenres;