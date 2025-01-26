import { useState, useEffect, useCallback } from "react";

type MethodFetch = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface UseFetchProps {
  url: string;
  method?: MethodFetch;
  values?: any;
  autoFetch?: boolean;
}

export function useFetch({ url, method = "GET", values, autoFetch = true }: UseFetchProps) {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      };

      if (method !== "GET" && values) {
        options.body = JSON.stringify(values);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        setError(`Error ${response.status}: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (e: any) {
      setError(e.message || "Hubo un error en la petición...Inténtelo de nuevo");
    } finally {
      setLoading(false);
    }
  }, [url, method, values]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return {
    error,
    data,
    loading,
    refetch: fetchData,
  };
}
