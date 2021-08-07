import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-rows: 1fr 100px;
  background-color: rgb(22, 29, 38);
  border-top: 1px solid #616161;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: 2.5rem;
  padding-top: 2rem;
`;

export const ListName = styled.button`
  display: grid;
  grid-template-columns: 0.1px 1fr;
  width: 100%;
  background-color: rgb(22, 29, 38);
  border: none;
  font-family: "Noto Sans JP", sans-serif;
  height: 100%;
  align-items: center;

  .content {
    place-self: center;
    width: 85%;
    color: rgb(255, 254, 229);
    height: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .material-icons {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  &:focus {
    grid-template-columns: 3px 1fr;

    .line {
      width: 100%;
      height: 80%;
      background-color: rgb(255, 153, 1);
      border-radius: 0 1rem 1rem 0;
    }

    .content {
      color: rgb(255, 153, 1);
      background-color: rgb(44, 60, 75);
      border-radius: 10px;
    }
  }
`;

export const LogOut = styled.div`
  padding: 2rem;
  color: rgb(255, 254, 229);
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
  }

  span {
    padding-right: 1rem;
  }
`;
