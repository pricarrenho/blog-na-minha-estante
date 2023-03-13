import Container from "components/Container";
import * as S from "./styles";

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.ContentText>
            Na Minha Estante• Todos os direitos reservados • Desenvolvido com 💜
            por{" "}
            <b>
              <i>Priscilla Carrenho</i>
            </b>
          </S.ContentText>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Footer;
