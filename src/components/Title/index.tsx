import { TitleProps } from "./types";
import * as S from "./styles";

const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
