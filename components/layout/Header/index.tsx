import Image from "next/image";
import SearchBar from "../../common/SearchBar";

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
      <AccountServices></AccountServices>
    </HeaderWrapper>
  );
};

export default Header;
