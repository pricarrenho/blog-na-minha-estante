import { useEffect, useState } from "react";
import type { SearchSuggestion } from "./types";

type SuggestionsState =
  | { query: string; items: SearchSuggestion[] }
  | { query: string; error: true };

export function useSearchSuggestions(query: string, enabled: boolean) {
  const [state, setState] = useState<SuggestionsState>();

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ q: query });
        const response = await fetch(`/api/pesquisa?${params}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Falha ao carregar sugestões");

        const items: SearchSuggestion[] = await response.json();
        if (!controller.signal.aborted) setState({ query, items });
      } catch {
        if (!controller.signal.aborted) setState({ query, error: true });
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, enabled]);

  return state?.query === query ? state : undefined;
}
