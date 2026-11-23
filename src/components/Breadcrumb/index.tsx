import Link from "next/link";
import * as S from "./styles";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const trail = [{ label: "Página inicial", href: "/" }, ...items];

  return (
    <S.Wrapper aria-label="Caminho da página">
      <ol>
        {trail.map(({ label, href }, index) => (
          <li key={href ?? label}>
            {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
            {index < trail.length - 1 && (
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="m6 3 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </S.Wrapper>
  );
}
