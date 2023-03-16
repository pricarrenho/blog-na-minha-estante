import Image from "next/image";
import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.2);
  width: 60%;
  padding: 24px;
  transition: 0.2s;

  @media (min-width: 800px) {
    left: 0;
    top: unset;
    transform: unset;
    bottom: 0;
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: 40px;

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

    .slick-dots {
      bottom: -32px;
    }

    .slick-dots li button:before {
      color: ${theme.colors.fuchsia[900]};
    }

    @media (min-width: 800px) {
      .slick-dots {
        bottom: -48px;
      }
    }
  `}
`;

export const SliderItem = styled.div`
  position: relative;
  border-radius: 0px;
  overflow: hidden;

  @media (min-width: 800px) {
    border-radius: 8px;
  }
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  transition: 0.2s;
  height: 200px;

  @media (min-width: 800px) {
    height: 500px;
  }
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.md};
    text-align: center;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.lg};
      text-align: left;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.sm};
    text-align: center;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
      text-align: left;
    }
  `}
`;
