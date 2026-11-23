import type { NavigationCategory } from "service/category/getCategories";
import useSWR from "swr";
import { useRouter } from "next/router";
import logoPink from "../../assets/img/logoPink.png";
import { Container } from "components/Container";
import { SearchInput } from "components/SearchInput";
import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

export function Header({ search }: { search?: string }) {
  const { pathname, query } = useRouter();
  const isHome = pathname === "/";
  const isReviewSubcategory = pathname === "/resenhas/subcategorias/[subcategory]";
  const isCategoryPage = pathname === "/[category]";
  const categorySlug = isCategoryPage || pathname === "/[category]/[post]"
    ? query.category
    : isReviewSubcategory ? "resenhas" : undefined;
  const { data } = useSWR<NavigationCategory[]>("/api/categories", null);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [submenuDismissed, setSubmenuDismissed] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpened) return;

    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpened(false);
    };

    document.body.classList.add("no-scroll");
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.classList.remove("no-scroll");
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileMenuOpened]);

  const handleMenuNavigate = () => {
    setMobileMenuOpened(false);
    setSubmenuDismissed(false);
  };

  return (
    <S.Wrapper onKeyDown={(event) => {
      if (mobileMenuOpened && event.key === "Escape") {
        handleMenuNavigate();
        menuButton.current?.focus();
      }
    }}>
      <Container>
        <S.Content>
          <S.Brand href="/" onClick={handleMenuNavigate}>
            <S.ImageLogo src={logoPink} alt="Na Minha Estante" width={230} height={60} />
          </S.Brand>

          <S.Menu
            ref={menuButton}
            type="button"
            onClick={() => {
              setMobileMenuOpened(!mobileMenuOpened);
              setSubmenuDismissed(false);
            }}
            $isOpen={mobileMenuOpened}
            aria-controls="menu-principal"
            aria-expanded={mobileMenuOpened}
            aria-label={mobileMenuOpened ? "Fechar menu" : "Abrir menu"}
          >
            <span />
          </S.Menu>

          <S.MenuContent id="menu-principal" aria-label="Menu principal" $show={mobileMenuOpened}>
            <S.Search>
              <SearchInput key={search ?? ""} search={search} onSearch={handleMenuNavigate} />
            </S.Search>
            <S.MenuItems>
              <S.HomeLink
                href="/"
                aria-current={isHome ? "page" : undefined}
                onClick={handleMenuNavigate}
              >
                Início
              </S.HomeLink>
              {data?.map((category) => {
                const isActive = category.slug === categorySlug;
                const hasSubcategories = category.slug === "resenhas" && category.subcategories.length > 0;

                return (
                  <S.MenuItem
                    key={category.slug}
                    $dismissed={hasSubcategories && submenuDismissed}
                    onPointerLeave={hasSubcategories ? () => setSubmenuDismissed(false) : undefined}
                    onBlur={hasSubcategories ? (event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setSubmenuDismissed(false);
                      }
                    } : undefined}
                    onKeyDown={hasSubcategories ? (event) => {
                      if (event.key === "Escape" && window.matchMedia("(min-width: 800px)").matches) {
                        setSubmenuDismissed(true);
                        event.currentTarget.querySelector("a")?.focus();
                      }
                    } : undefined}
                  >
                    <S.CategoriesLink
                      href={`/${category.slug}`}
                      aria-current={isActive ? (isCategoryPage ? "page" : "location") : undefined}
                      onClick={handleMenuNavigate}
                    >
                      {category.name}
                    </S.CategoriesLink>

                    {hasSubcategories && (
                      <S.Submenu id="menu-resenhas">
                        {category.subcategories.map(({ slug, name }) => (
                          <li key={slug}>
                            <S.SubmenuLink
                              href={`/resenhas/subcategorias/${slug}`}
                              aria-current={isReviewSubcategory && slug === query.subcategory ? "page" : undefined}
                              onClick={handleMenuNavigate}
                            >
                              {name}
                            </S.SubmenuLink>
                          </li>
                        ))}
                      </S.Submenu>
                    )}
                  </S.MenuItem>
                );
              })}
            </S.MenuItems>
          </S.MenuContent>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
