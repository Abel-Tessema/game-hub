import {useQuery} from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import ApiClient, {FetchResponse} from "../services/api-client.ts";
import ms from "ms";
import Platform from "../entities/Platform.ts";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms("24 hours"),
    initialData: platforms,
});

export default usePlatforms;