import Image from "next/image";
import styled, { css } from "styled-components";

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    margin-top: 48px;

    @media (min-width: 800px) {
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    }
  `}
`;

export const PostBreadcrumb = styled.div`
  grid-column: 1 / -1;

  nav {
    margin-bottom: 0;
  }
`;

export const CardPost = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    border-radius: ${theme.border.size};
    margin-bottom: 48px;
    min-width: 0;
  `}
`;

export const PhotoBook = styled(Image)`
  display: block;
  height: 80px;
  object-fit: cover;
  filter: blur(6px);
  border-radius: ${({ theme }) => theme.border.size} ${({ theme }) => theme.border.size} 0 0;
  mask-image: linear-gradient(to top, transparent 10%, white 75%);
  opacity: 0.3;
  width: 100%;

  @media (min-width: 800px) {
    height: 100px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 24px 24px;
    overflow-wrap: anywhere;

    main p {
      text-align: left;

      @media (min-width: 800px) {
        text-align: justify;
      }
    }

    main img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      margin: 48px 16px;
      padding: 24px;
      border-radius: ${theme.border.size};
      text-align: center;
      color: ${theme.colors.white};
      background: ${theme.colors.primary[50]};
      font-size: ${theme.font.sizes.md};
      font-weight: 500;
    }

    @media (min-width: 800px) {
      padding: 0px 48px 40px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary[50]};
    margin: 0 0 24px;
    font-size: clamp(${theme.font.sizes.lg}, 5vw, ${theme.font.sizes.xl});
    line-height: 1.25;
  `}
`;

export const PhotoBookInside = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 200px;
  margin-bottom: 24px;

  @media (min-width: 800px) {
    height: 500px;
  }
`;

export const Sidebar = styled.aside`
  min-width: 0;
`;

export const RelatedPosts = styled.section`
  grid-column: 1 / -1;
`;
