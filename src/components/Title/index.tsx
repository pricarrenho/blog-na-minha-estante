import { TitleProps } from "./types";
import * as S from "./styles";

export const Title = ({ children, type }: TitleProps) => {
  return <S.Title type={type}>{children}</S.Title>;
};
