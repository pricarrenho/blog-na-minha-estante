import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    position: relative;
    margin-top: 40px;

      &::after {
        position: absolute;
        content: "";
        height: 1px;
        top: -40px;
        width: 80%;
        left: 10%;
        background: ${theme.colors.neutral[300]};
      }
    }

    @media (min-width: 800px) {
      margin-top: 0px;

      &::after {
      display: none;
      }
    
  `}
`;

export const AuthorImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary[50]};
    margin-top: 8px;
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
    padding: 0px 24px;
  `}
`;
