import { getCategories } from "service/category/getCategories";
import useSWR from "swr";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import logoPink from "../../assets/img/logoPink.png";
import Container from "components/Container";
import { useState } from "react";
import * as S from "./styles";

function Header() {
  const { data } = useSWR("/api/categories", getCategories);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened);
  };

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link href={"/"}>
            <S.ImageLogo
              src={logoPink}
              alt="Logo redondo escrito Na Minha Estante"
            />
          </Link>

          <S.MenuContent show={mobileMenuOpened}>
            {data?.map((category: any) => (
              <li key={category.name}>
                <S.CategoriesLink href={`/${category.slug}`}>
                  {category.name}
                </S.CategoriesLink>
              </li>
            ))}
          </S.MenuContent>

          <S.Menu onClick={handleToggleMenu} isOpen={mobileMenuOpened}>
            <div></div>
          </S.Menu>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Header;
