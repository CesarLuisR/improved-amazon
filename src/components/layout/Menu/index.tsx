import { useState } from "react";

import NavBarModal from "../../common/NavbarModal";
import SearchModal from "../../common/SearchModal";

import { MenuWrapper, MenuIcon } from "./styles";

type MenuProps = (props: { categories: string[] }) => JSX.Element;

const Menu: MenuProps = ({ categories }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleModal = (component: string, to: string) => {
    if (to === "open") {
      if (component === "search") setIsSearchModalOpen(true);
      else setIsNavBarOpen(true);
    } else {
      if (component === "search") setIsSearchModalOpen(false);
      else setIsNavBarOpen(false);
    }
  };

  return (
    <MenuWrapper>
      <MenuIcon onClick={() => handleModal("search", "open")}>
        <span className="material-icons">search</span>
      </MenuIcon>
      <MenuIcon
        className="navbar"
        onClick={() => handleModal("navbar", "open")}
      >
        <span className="material-icons icon">menu</span>
      </MenuIcon>
      {isSearchModalOpen && (
        <SearchModal categories={categories} handleModal={handleModal} />
      )}
      <NavBarModal handleModal={handleModal} isOpen={isNavBarOpen} />
    </MenuWrapper>
  );
};

export default Menu;
