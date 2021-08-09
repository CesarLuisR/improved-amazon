import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  width: 100%;
  height: 100%;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`;