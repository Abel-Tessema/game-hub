import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4f9532e941954ed695050e77975d77bd"
    }
});

export interface FetchResponse<T> {
    count: number,
    results: T[]
}

class ApiClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchResponse<T>>(this.endPoint, requestConfig)
            .then(response => response.data.results);
}

export default ApiClient;