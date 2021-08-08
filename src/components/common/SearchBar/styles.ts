import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  width: 80%;
  max-width: 35rem;
  height: 3rem;
  grid-template-columns: 64% 26% 10%;
  border-radius: 1rem;
  background-color: rgb(34, 48, 64);
  overflow: hidden;
  border: 1px solid #616161;

  @media (max-width: 1020px) {
    width: 90%;
    max-width: 90%;
    grid-template-columns: 54% 31% 15%;
  }
`;

export const CategoriesContainer = styled.div`
  background-color: transparent;
  border-left: 1px solid #616161;
`;

export const SearchButton = styled.button`
  background-color: rgb(255, 153, 1);
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 254, 229);
  cursor: pointer;
`;

export const ListInput = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 1rem;
  color: rgb(255, 254, 229);
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
  border: none;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: rgb(255, 254, 229);
  }
`;

export const SearchInput = styled.input.attrs((props) => ({
  type: "search",
  placeholder: "Search...",
}))`
  background-color: transparent;
  padding: 1rem;
  color: rgb(255, 254, 229);
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
  border: none;
  outline: none;

  &::placeholder {
    color: rgb(255, 254, 229);
  }
`;
