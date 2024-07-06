import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count?: number,
    next?: string | null,
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4f9532e941954ed695050e77975d77bd"
    }
});

class ApiClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchResponse<T>>(this.endPoint, requestConfig)
            .then(response => response.data);

    get = (id: number | string) =>
        axiosInstance
            .get<T>(this.endPoint + "/" + id)
            .then(response => response.data);
}

export default ApiClient;