import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const MenuIcon = styled.div`
  width: 70%;
  height: 70%;
  display: grid;
  place-items: center;
  font-size: 3rem;
  color: rgb(255, 254, 229);
  cursor: pointer;
  border-radius: 1rem;

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

export const NavBarModalWrapper = styled.div`
  position: fixed;
  background-color: rgb(22, 29, 38);
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  transition: 0.8s;
  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 80px;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`;

export const MenuNavBar = styled.div`
  display: grid;
  grid-auto-rows: 70px;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
`;

export const MenuNavBarItem = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  color: rgb(255, 254, 229);
  font-family: "Noto Sans JP", sans-serif;

  .material-icons,
  .profile-container {
    justify-self: center;
  }

  .profile-container {
    display: grid;
    place-items: center;
  }

  .profile-text {
    margin-left: 1rem;
  }
`;
