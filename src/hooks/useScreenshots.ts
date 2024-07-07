import ApiClient from "../services/api-client.ts";
import Screenshot from "../entities/Screenshot.ts";
import {useQuery} from "@tanstack/react-query";

const useScreenshots = (slug: string) => {
    const apiClient = new ApiClient<Screenshot>("/games/" + slug + "/screenshots");

    return useQuery({
        queryKey: ['screenshots', slug],
        queryFn: apiClient.getAll
    });
}

export default useScreenshots;