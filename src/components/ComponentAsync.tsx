import { useCallback, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "../utilities";

export function ComponentAsync() {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>();
  const url = useRef<string>("https://rickandmorsdfsfdyapi.com/api/characters/1");

  const fetchRickAndMorty = useCallback(async () => {
    try {
      const response = await fetch(url.current);
      const data = await response.json();
      setError(false);
      setResult(data);
    } catch (error) {
      setError(true);
      url.current = "https://rickandmortyapi.com/api/character/1";
    }
  }, [url]);

  useEffect(() => {
    fetchRickAndMorty();

    setTimeout(() => {
      fetchRickAndMorty();
    }, 4000);
  }, [fetchRickAndMorty]);

  return (
    <ErrorBoundary fallBackComponent={<>No anda</>} resetCondition={result} error={error}>
      <div>{JSON.stringify(result)}</div>
    </ErrorBoundary>
  );
}
