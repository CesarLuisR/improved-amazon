import { HeaderWrapper } from "./styles";

type HeaderProps = (props: { categories: string[] }) => JSX.Element;

const Header: HeaderProps = ({ categories }) => {
  console.log(categories)
  return <HeaderWrapper></HeaderWrapper>;
};

export default Header;
