import Image from "next/image";
import Link from "next/link";

import SearchBar from "../../common/SearchBar";
import Profile from "../../common/Profile";
import Menu from "../Menu";

import { useEffect, useState, useLayoutEffect } from "react";

import {
  HeaderWrapper,
  LogoContainer,
  SearchBarContainer,
  NavBar,
} from "./styles";

type HeaderProps = (props: { categories: string[] }) => JSX.Element;

const Header: HeaderProps = ({ categories }) => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList>();

  useEffect(() => {
    setMediaQuery(window.matchMedia("(max-width: 1030px)"));
  }, []);

  useLayoutEffect(() => {
    const updateSize = () =>
      setMediaQuery(window.matchMedia("(max-width: 1030px)"));

    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Image src="/Logo.png" alt="logo" width={1920} height={1080} />
      </LogoContainer>

      {mediaQuery?.matches ? (
        <Menu categories={categories} />
      ) : (
        <>
          <SearchBarContainer>
            <SearchBar categories={categories} />
          </SearchBarContainer>
          <NavBar>
            <Link href="/favorites">
              <a className="navbar-icon">
                <span className="material-icons">favorite_border</span>
              </a>
            </Link>
            <Link href="/cart">
              <a className="navbar-icon">
                <span className="material-icons">shopping_cart</span>
              </a>
            </Link>
            <Link href="/notifications">
              <a className="navbar-icon">
                <span className="material-icons">notifications_none</span>
              </a>
            </Link>
            <Profile />
          </NavBar>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
