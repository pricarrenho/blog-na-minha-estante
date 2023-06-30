import { getCategories } from "service/category/getCategories";
import useSWR from "swr";
import Link from "next/link";
import logoPink from "../../assets/img/logoPink.png";
import Container from "components/Container";
import { useState } from "react";
import * as S from "./styles";

function Header() {
  const { data } = useSWR("/api/categories", getCategories);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened);
    document
      .querySelector("body")
      ?.classList.toggle("no-scroll", !mobileMenuOpened);
  };

  const handleMenuNavigate = () => {
    setMobileMenuOpened(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link href={"/"} onClick={handleMenuNavigate}>
            <S.ImageLogo src={logoPink} alt="Logo Na Minha Estante" />
          </Link>

          <S.Menu onClick={handleToggleMenu} isOpen={mobileMenuOpened}>
            <div></div>
          </S.Menu>

          <S.MenuContent show={mobileMenuOpened}>
            {data?.map((category: any) => (
              <li key={category.name}>
                <S.CategoriesLink
                  href={`/${category.slug}`}
                  onClick={handleMenuNavigate}
                >
                  {category.name}
                </S.CategoriesLink>
              </li>
            ))}
          </S.MenuContent>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Header;
