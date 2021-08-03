import { useState } from "react";

import Portal from "../Portal";
import SearchBar from "../../common/SearchBar";

import { MenuWrapper, MenuIcon, SearchBarModalWrapper } from "./styles";

type SearchModalProps = (props: {
  categories: string[];
  close: (component: string) => void;
}) => React.ReactElement;

const SearchModal: SearchModalProps = ({ categories, close }) => {
  return (
    <Portal>
      <SearchBarModalWrapper>
        <SearchBar categories={categories} />
        <MenuIcon onClick={() => close("search")}>
          <span className="material-icons">close</span>
        </MenuIcon>
      </SearchBarModalWrapper>
    </Portal>
  );
};

type NavBarModalProps = (props: {
  close: (component: string) => void;
}) => React.ReactElement;

const NavBarModal: NavBarModalProps = () => {
  return <div></div>;
};

type MenuProps = (props: { categories: string[] }) => JSX.Element;

const Menu: MenuProps = ({ categories }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const open = (component: string): void => {
    if (component === "search") setIsSearchModalOpen(true);
    else setIsNavBarOpen(true);
  };

  const close = (component: string): void => {
    if (component === "search") setIsSearchModalOpen(false);
    else setIsNavBarOpen(false);
  };

  return (
    <MenuWrapper>
      <MenuIcon>
        <span className="material-icons" onClick={() => open("search")}>
          search
        </span>
      </MenuIcon>
      {isSearchModalOpen && (
        <SearchModal categories={categories} close={close} />
      )}
      <MenuIcon className="navbar" onClick={() => open("navbar")}>
        <span className="material-icons icon">menu</span>
      </MenuIcon>
      {isNavBarOpen && <NavBarModal close={close} />}
    </MenuWrapper>
  );
};

export default Menu;
