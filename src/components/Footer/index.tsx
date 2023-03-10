import Container from "components/Container";
import * as S from "./styles";

function Footer() {
  return (
    <S.Content>
      <Container>
        <S.Wrapper>
          <p>
            Na Minha Estante• Todos os direitos reservados • Desenvolvido com 💜
            por{" "}
            <b>
              <i>Priscilla Carrenho</i>
            </b>
          </p>
        </S.Wrapper>
      </Container>
    </S.Content>
  );
}

export default Footer;
