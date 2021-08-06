import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: rgb(22, 29, 38);
  display: grid;
  grid-template-columns: 20% 57% 23%;
  user-select: none;

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr 160px;
  }
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

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 254, 229);

  .navbar-icon {
    border-radius: 8px;
    padding: 12px;
    display: grid;
    place-items: center;
    margin: 10px;

    &:hover {
      background-color: rgb(255, 153, 1);
      color: rgb(22, 29, 38);
    }
  }
`;