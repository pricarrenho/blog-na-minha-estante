import Image from "next/image";
import styled, { css } from "styled-components";

export const Perfil = styled.div`
  ${({ theme }) => css`
    text-align: center;

    h2 {
      color: ${theme.colors.fuchsia[700]};
    }

    p {
      text-align: center;
    }
  `}
`;

export const AuthorImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;
