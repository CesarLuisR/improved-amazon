import Image from "next/image";
import Link from "next/link";

import Portal from "../../layout/Portal";

import {
  NavBarModalWrapper,
  MenuIcon,
  MenuNavBar,
  MenuNavBarItem,
} from "../../layout/Menu/styles";
import { LogoContainer } from "../../layout/Header/styles";

type NavBarModalProps = (props: {
  handleModal: (component: string, to: string) => void;
  isOpen: boolean;
}) => React.ReactElement;

const NavBarModal: NavBarModalProps = ({ handleModal, isOpen }) => {
  return (
    <Portal>
      <NavBarModalWrapper className={`${isOpen && "open"}`}>
        <div className="header">
          <LogoContainer>
            <Image src="/Logo.png" alt="logo" width={1920} height={1080} />
          </LogoContainer>
          <MenuIcon onClick={() => handleModal("navbar", "close")}>
            <span className="material-icons">close</span>
          </MenuIcon>
        </div>
        <MenuNavBar>
          <MenuNavBarItem>
            <span className="material-icons">favorite_border</span>
            <Link href="/favorites">
              <a>
                <span>Favorites</span>
              </a>
            </Link>
          </MenuNavBarItem>
          <MenuNavBarItem>
            <span className="material-icons">shopping_cart</span>
            <Link href="/cart">
              <a>
                <span>Cart</span>
              </a>
            </Link>
          </MenuNavBarItem>
          <MenuNavBarItem>
            <span className="material-icons">notifications_none</span>
            <Link href="/notifications">
              <a>
                <span>Nofications</span>
              </a>
            </Link>
          </MenuNavBarItem>
          <MenuNavBarItem className="profile">
            <span className="material-icons">perm_identity</span>
            <Link href="profile">
              <a>
                <span>Profile</span>
              </a>
            </Link>
          </MenuNavBarItem>
        </MenuNavBar>
      </NavBarModalWrapper>
    </Portal>
  );
};

export default NavBarModal;
