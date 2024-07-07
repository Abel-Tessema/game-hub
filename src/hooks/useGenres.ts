import genres from "../data/genres.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client.ts";
import ms from "ms";
import Genre from "../entities/Genre.ts";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms("24 hours"),
    initialData: genres
});

export default useGenres;