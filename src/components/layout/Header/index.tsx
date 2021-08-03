import Image from "next/image";
import Link from "next/link";

import SearchBar from "../../common/SearchBar";
import Profile from "../../common/Profile";

import {
  HeaderWrapper,
  LogoContainer,
  SearchBarContainer,
  AccountServices,
} from "./styles";

type HeaderProps = (props: { categories: string[] }) => JSX.Element;

const Header: HeaderProps = ({ categories }) => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Image src="/Logo.png" alt="logo" width={1920} height={1080} />
      </LogoContainer>
      <SearchBarContainer>
        <SearchBar categories={categories} />
      </SearchBarContainer>
      <AccountServices>
        <Link href="/favorite">
          <a>
            <span className="material-icons">favorite_border</span>
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <span className="material-icons">shopping_cart</span>
          </a>
        </Link>
        <span className="material-icons">notifications_none</span>
        <Profile />
      </AccountServices>
    </HeaderWrapper>
  );
};

export default Header;
