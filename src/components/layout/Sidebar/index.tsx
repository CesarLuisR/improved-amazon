import Link from "next/link";

import {
  ListContainer,
  ListItem,
  ListItemChildren,
  ListItemName,
  LogOut,
  SidebarWrapper,
} from "./styles";

type SidebarProps = (props: { categories: string[] }) => React.ReactElement;

const Sidebar: SidebarProps = ({ categories }) => {
  const handleLogOut = () => localStorage.removeItem("auth");

  return (
    <SidebarWrapper>
      <ListContainer>
        <ListItem>
          <ListItemName>
            <span className="line" />
            <div className="content">
              <span className="material-icons">category</span>
              <span className="text"> Categories </span>
            </div>
          </ListItemName>
          <ListItemChildren>
            {categories.map((category, index) => (
              <Link href={`/categories/${category}`} key={index}>
                <a className="capitalize">{category}</a>
              </Link>
            ))}
          </ListItemChildren>
        </ListItem>

        <ListItem>
          <ListItemName>
            <span className="line" />
            <div className="content">
              <span className="material-icons">sell</span>
              <span className="text"> Sell on Amazon </span>
            </div>
          </ListItemName>
          <ListItemChildren>
            <Link href={`/myshop`}>
              <a>My products</a>
            </Link>
            <Link href={`/sell`}>
              <a>Sell products</a>
            </Link>
          </ListItemChildren>
        </ListItem>

        <ListItem>
          <ListItemName>
            <span className="line" />
            <div className="content">
              <span className="material-icons">help_outline</span>
              <span className="text"> Help </span>
            </div>
          </ListItemName>
          <ListItemChildren>
            <Link href={`/about`}>
              <a>About</a>
            </Link>
            <Link href={`/settings`}>
              <a>Settings</a>
            </Link>
          </ListItemChildren>
        </ListItem>
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
