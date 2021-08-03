import styled from "styled-components";

export const MenuWrapper = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const MenuIcon = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 3rem;
  color: rgb(255, 254, 229);
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 153, 1);
  }
`;

export const SearchBarModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: grid;
  background-color: rgb(22, 29, 38);
  grid-template-columns: 1fr 80px;
  place-items: center;
`;