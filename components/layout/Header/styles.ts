import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(22, 29, 38);
  display: grid;
  grid-template-columns: 20% 50% 30%;
`;

export const LogoContainer = styled.div` 
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 3rem;

  img {
    width: 7rem;
  }
`;

export const SearchBarContainer = styled.div` 
  display: flex;
  align-items: center;
`;

export const AccountServices = styled.div` 

`;