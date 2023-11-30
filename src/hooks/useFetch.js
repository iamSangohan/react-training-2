import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url, params={}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            ...params,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                ...params.headers
            }
        }).then(response => response.json()).then(data => {
            setData(data);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return {
        data,
        loading,
        error
    }
}