import { useRouter } from "next/router";
import { useId, useRef, useState } from "react";
import { useSearchSuggestions } from "./useSearchSuggestions";
import * as S from "./styles";

export function SearchInput({ search = "", onSearch }: { search?: string; onSearch: () => void }) {
  const router = useRouter();
  const [value, setValue] = useState(search);
  const [focused, setFocused] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const suggestionsList = useRef<HTMLUListElement>(null);
  const suggestionsId = useId();
  const query = value.trim();
  const showSuggestions = focused && query.length >= 2;
  const suggestions = useSearchSuggestions(query, showSuggestions);

  return (
    <S.Form
      role="search"
      action="/pesquisa"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && showSuggestions) {
          event.preventDefault();
          event.stopPropagation();
          input.current?.focus();
          setFocused(false);
        }
      }}
      onSubmit={(event) => {
        event.preventDefault();
        if (!query) return;

        setFocused(false);
        onSearch();
        const q = query;
        void router.push({ pathname: "/pesquisa", query: { q } }).catch((error: { cancelled?: boolean } | undefined) => {
          if (error?.cancelled) return;
          window.location.assign(`/pesquisa?${new URLSearchParams({ q })}`);
        });
      }}
    >
      <S.Input
        ref={input}
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        aria-controls={showSuggestions ? suggestionsId : undefined}
        onFocus={() => setFocused(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && suggestionsList.current?.querySelector("a")) {
            event.preventDefault();
            suggestionsList.current.querySelector("a")?.focus();
          }
        }}
        name="q"
        aria-label="Pesquisar no blog"
        placeholder="Pesquisar no blog"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setFocused(true);
        }}
        required
        maxLength={120}
      />
      {value ? (
        <S.Clear
          type="button"
          aria-label="Limpar pesquisa"
          onClick={() => {
            setValue("");
            input.current?.focus();
          }}
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </S.Clear>
      ) : (
        <S.Submit type="submit" aria-label="Pesquisar">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" />
          </svg>
        </S.Submit>
      )}

      {showSuggestions && (
        <S.Suggestions id={suggestionsId}>
          {!suggestions ? (
            <S.Status role="status">Buscando publicações…</S.Status>
          ) : "error" in suggestions ? (
            <S.Status role="status">As sugestões estão indisponíveis. Tente enviar a pesquisa.</S.Status>
          ) : suggestions.items.length === 0 ? (
            <S.Status role="status">Nenhuma publicação encontrada.</S.Status>
          ) : (
            <S.SuggestionsList ref={suggestionsList} aria-label="Sugestões de pesquisa">
              {suggestions.items.map(({ href, title, category }) => (
                <li key={href}>
                  <S.SuggestionLink
                    href={href}
                    prefetch={false}
                    onClick={() => {
                      setFocused(false);
                      onSearch();
                    }}
                  >
                    <span>{title}</span>
                    {category && <small>{category}</small>}
                  </S.SuggestionLink>
                </li>
              ))}
            </S.SuggestionsList>
          )}
        </S.Suggestions>
      )}
    </S.Form>
  );
}
