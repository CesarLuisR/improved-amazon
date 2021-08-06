import Link from "next/link";

import { ListContainer, ListName, LogOut, SidebarWrapper } from "./styles";

type SidebarProps = (props: { categories: string[] }) => React.ReactElement;

const Sidebar: SidebarProps = ({ categories }) => {
  const handleLogOut = () => localStorage.removeItem("auth");

  return (
    <SidebarWrapper>
      <ListContainer>
        <ListName>
          <span className="line" />
          <div className="content">
            <span className="material-icons">category</span>
            <span className="text"> Categories </span>
          </div>
        </ListName>
        <ListName>
          <span className="line" />
          <div className="content">
            <span className="material-icons">sell</span>
            <span className="text"> Sell on Amazon </span>
          </div>
        </ListName>
        <ListName>
          <span className="line" />
          <div className="content">
            <span className="material-icons">help_outline</span>
            <span className="text"> Help </span>
          </div>
        </ListName>
      </ListContainer>
      <LogOut>
        <Link href="/">
          <a onClick={handleLogOut}>
            <span className="material-icons">logout</span>
            Log Out
          </a>
        </Link>
      </LogOut>
    </SidebarWrapper>
  );
};

export default Sidebar;
