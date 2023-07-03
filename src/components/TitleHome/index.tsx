import { Container } from "components/Container";
import * as S from "./styles";

export const TitleHome = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title>Explorando a minha estante</S.Title>
        <S.Subtitle>
          Descubra resenhas envolventes e sinceras, mergulhe nas curiosidades
          dos autores e encante-se com contos cativantes
        </S.Subtitle>
      </Container>
    </S.Wrapper>
  );
};
