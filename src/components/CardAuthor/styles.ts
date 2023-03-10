import Image from "next/image";
import styled, { css } from "styled-components";

export const Perfil = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 0px 24px;

    h2 {
      color: ${theme.colors.fuchsia[800]};
      margin-top: 8px;
    }

    p {
      text-align: center;
      font-size: ${theme.font.sizes.sm};
      line-height: 24px;
    }
  `}
`;

export const AuthorImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;
