import * as S from "./styles";

type PaginationProps = {
  page: number;
  pageCount: number;
  path: string;
  search?: string;
};

export function Pagination({ page, pageCount, path, search }: PaginationProps) {
  if (pageCount < 2) return null;

  const pages = pageCount <= 6
    ? Array.from({ length: pageCount }, (_, index) => index + 1)
    : [1, ...[page - 1, page, page + 1].filter((number) => number > 1 && number < pageCount), pageCount];

  function href(destination: number) {
    return {
      pathname: path,
      query: {
        ...(search && { q: search }),
        ...(destination > 1 && { pagina: destination }),
      },
    };
  }

  return (
    <S.Wrapper aria-label="Paginação">
      {page > 1 ? (
        <S.ArrowLink href={href(page - 1)} rel="prev" aria-label="Página anterior">
          <S.Chevron aria-hidden="true">‹</S.Chevron>
        </S.ArrowLink>
      ) : (
        <S.Unavailable aria-hidden="true"><S.Chevron>‹</S.Chevron></S.Unavailable>
      )}

      {pages.map((number, index) => (
        <S.PageGroup key={number}>
          {index > 0 && number - pages[index - 1] > 1 && <S.Gap aria-hidden="true">…</S.Gap>}
          {number === page ? (
            <S.Current aria-current="page" aria-label={`Página ${number}`}>{number}</S.Current>
          ) : (
            <S.PageLink href={href(number)} aria-label={`Página ${number}`}>{number}</S.PageLink>
          )}
        </S.PageGroup>
      ))}

      {page < pageCount ? (
        <S.ArrowLink href={href(page + 1)} rel="next" aria-label="Próxima página">
          <S.Chevron aria-hidden="true">›</S.Chevron>
        </S.ArrowLink>
      ) : (
        <S.Unavailable aria-hidden="true"><S.Chevron>›</S.Chevron></S.Unavailable>
      )}
    </S.Wrapper>
  );
}
