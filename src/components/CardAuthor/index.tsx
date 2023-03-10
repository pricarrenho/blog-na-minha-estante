import photoPerfil from "../../assets/img/photoPerfil.png";
import * as S from "./styles";

function CardAuthor() {
  return (
    <S.Perfil>
      <S.AuthorImg
        src={photoPerfil}
        alt="Foto do autor"
        width={150}
        height={150}
      />
      <h2>Priscilla Carrenho</h2>
      <p>
        Criadora e editora do Na Minha Estante. Graduanda em Análise e
        Desenvolvimento de Sistemas, porém apaixonada por livros desde que se
        lembra por gente.
      </p>
    </S.Perfil>
  );
}

export default CardAuthor;
