import React, { useState } from "react";
import { searchAction } from "../../../app/actions";
import { useDispatch } from "../../../app/store";

import {
  CategoriesContainer,
  ListInput,
  Wrapper,
  SearchButton,
  SearchInput,
} from "./styles";

type SearchBarProps = (props: { categories: string[] }) => JSX.Element;

const SearchBar: SearchBarProps = ({ categories }) => {
  const [formData, setFormData] = useState<object>({});
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch(searchAction(formData));
    e.target.reset();
  };

  return (
    <Wrapper onSubmit={handleSearch}>
      <SearchInput onChange={handleChange} name="toSearch" required />
      <CategoriesContainer>
        <datalist id="list">
          {categories.map((category, index) => (
            <option key={index} value={category} />
          ))}
        </datalist>
        <ListInput
          list="list"
          name="category"
          placeholder="All categories"
          onChange={handleChange}
        />
      </CategoriesContainer>
      <SearchButton>
        <span className="material-icons">search</span>
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
