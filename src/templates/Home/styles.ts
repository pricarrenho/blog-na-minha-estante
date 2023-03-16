import Container from "components/Container";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  padding: 0;

  @media (min-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
