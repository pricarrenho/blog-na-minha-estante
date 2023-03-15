import Image from "next/image";
import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  max-width: 50%;
  padding: 24px;
  transition: 0.2s;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    &:hover {
      ${TextWrapper} {
        background-color: rgba(0, 0, 0, 0.4);
      }

      ${PhotoBook} {
        filter: brightness(1.1);
      }
    }

    .slick-prev,
    .slick-next {
      &::before {
        font-size: ${theme.font.sizes.xl};
        color: rgba(255, 255, 255, 0.8);
      }

      &:hover::before {
        color: ${theme.colors.white};
      }
    }

    .slick-next {
      right: 20px;
      z-index: 1;
    }

    .slick-prev {
      left: 6px;
      z-index: 1;
    }

    .slick-dots li button {
      display: none;
    }
  `}
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  transition: 0.2s;
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
