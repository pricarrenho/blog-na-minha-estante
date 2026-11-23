import photoPerfil from "../../assets/img/photoPerfil.png";
import * as S from "./styles";

export function CardAuthor() {
  return (
    <S.Wrapper>
      <S.AuthorImg
        src={photoPerfil}
        alt="Foto do autor"
        width={150}
        height={150}
      />

      <S.Title>Priscilla Carrenho</S.Title>

      <S.ContentText>
        Criadora e editora do Na Minha Estante. Formada em Análise e
        Desenvolvimento de Sistemas e apaixonada por livros desde que se
        entende por gente.
      </S.ContentText>
    </S.Wrapper>
  );
}
