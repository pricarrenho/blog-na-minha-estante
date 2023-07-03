import { Container } from "components/Container";
import Link from "next/link";
import styled, { css } from "styled-components";

export const CustomContainer = styled(Container)`
  padding: 0;
  margin-top: -62px;

  @media (min-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SectionContent = styled.section`
  margin: 80px 0;
`;

export const LinkCategory = styled(Link)`
  ${({ theme }) => css``}
`;
