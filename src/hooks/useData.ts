import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endPoint, {signal: controller.signal})
            .then(response => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            })

        return () => controller.abort();
    }, []);

    return {data, error, isLoading};
}

export default useData;