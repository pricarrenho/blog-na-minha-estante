import { Container } from "components/Container";
import Link from "next/link";
import * as S from "./styles";

export function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.ContentText>
            Na Minha Estante • Todos os direitos reservados • Desenvolvido com ♡
            por{" "}
            <span>
              <Link href={"https://pricarrenho.com.br"} target="_blank">
                <b>Priscilla Carrenho</b>
              </Link>
            </span>
          </S.ContentText>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
