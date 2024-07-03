import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4f9532e941954ed695050e77975d77bd"
    }
});

export interface FetchResponse<T> {
    count: number,
    results: T[]
}