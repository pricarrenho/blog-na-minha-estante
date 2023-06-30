import { TitleProps } from "./types";
import * as S from "./styles";

const Title = ({ children, type }: TitleProps) => {
  return <S.Title type={type}>{children}</S.Title>;
};

export default Title;
