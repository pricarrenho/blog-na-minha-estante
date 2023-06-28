import Image from "next/image";
import styled, { css } from "styled-components";

export const TextWrapper = styled.div``;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: 40px;
    margin: 0 8px;

    .slick-slide {
      cursor: pointer;

      &:hover {
        filter: brightness(1.2);

        h2 {
          color: ${theme.colors.fuchsia[900]};
        }
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

    .slick-dots {
      bottom: -32px;
    }

    .slick-dots li button:before {
      color: ${theme.colors.fuchsia[900]};
      font-size: 8px;
    }

    .slick-track {
      display: flex;
      gap: 16px;
    }

    @media (min-width: 800px) {
      margin: 0 -16px;

      .slick-dots {
        bottom: -48px;
      }

      .slick-track {
        display: flex;
        gap: 16px;
      }
    }
  `}
`;

export const SliderItem = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  transition: 0.4s;
  height: 150px;
  border-radius: 0;

  @media (min-width: 800px) {
    height: 250px;
    width: 250px;
    border-radius: 8px;
  }
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.sm};
    text-align: center;
    margin-top: 16px;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
      text-align: left;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[600]};
    font-size: ${theme.font.sizes.sm};
    text-align: center;
    margin: 0;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.sm};
      text-align: left;
      line-height: 24px;
    }
  `}
`;
