import { getCategories } from "service/category/getCategories";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import Container from "components/Container";
import * as S from "./styles";
import { useState } from "react";

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
              src={logo}
              alt="Logo redondo escrito Na Minha Estante"
              width="72"
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
