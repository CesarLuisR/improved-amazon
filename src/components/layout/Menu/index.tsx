import { useState } from "react";

import NavBarModal from "../../common/NavbarModal";
import SearchModal from "../../common/SearchModal";

import { MenuWrapper, MenuIcon } from "./styles";

type MenuProps = (props: { categories: string[] }) => JSX.Element;

const Menu: MenuProps = ({ categories }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleModal = (component: string, to: string) => {
    switch (to) {
      case "open":
        if (component === "search") setIsSearchModalOpen(true);
        else setIsNavBarOpen(true);
        break;

      case "close":
        if (component === "search") setIsSearchModalOpen(false);
        else setIsNavBarOpen(false);
        break;
    }
  };

  return (
    <MenuWrapper>
      <MenuIcon onClick={() => handleModal("search", "open")}>
        <span className="material-icons">search</span>
      </MenuIcon>
      {isSearchModalOpen && (
        <SearchModal categories={categories} handleModal={handleModal} />
      )}
      <MenuIcon
        className="navbar"
        onClick={() => handleModal("navbar", "open")}
      >
        <span className="material-icons icon">menu</span>
      </MenuIcon>
      <NavBarModal handleModal={handleModal} isOpen={isNavBarOpen} />
    </MenuWrapper>
  );
};

export default Menu;
