import Link from "next/link";
import { useState, useEffect, useLayoutEffect } from "react";

import Portal from "../Portal";

import {
  HandleModalButton,
  ListContainer,
  ListItem,
  ListItemChildren,
  ListItemName,
  LogOut,
  SidebarWrapper,
} from "./styles";

type SidebarProps = (props: { categories: string[] }) => React.ReactElement;

const Sidebar: SidebarProps = ({ categories }) => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setMediaQuery(window.matchMedia("(max-width: 1030px)"));
  }, []);

  useLayoutEffect(() => {
    const updateSize = () =>
      setMediaQuery(window.matchMedia("(max-width: 1030px)"));

    window.addEventListener("resize", updateSize);
  }, []);

  const handleLogOut = () => localStorage.removeItem("auth");
  const handleModal = () => setIsOpen(!isOpen);

  const DeskVersion: SidebarProps = ({ categories }) => {
    return (
      <SidebarWrapper className={`${isOpen && "open"}`}>
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
                <a>Sell new product</a>
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

  const MobileVersion: SidebarProps = ({ categories }) => {
    return (
      <Portal>
        <>
          <SidebarWrapper className={`${isOpen && "open"}`}>
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
                    <a>Sell new product</a>
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

          <HandleModalButton onClick={handleModal}>
            {isOpen ? (
              <span className="material-icons">close</span>
            ) : (
              <span className="material-icons">menu_open</span>
            )}
          </HandleModalButton>
        </>
      </Portal>
    );
  };

  return (
    <>
      {mediaQuery?.matches ? (
        <MobileVersion categories={categories} />
      ) : (
        <DeskVersion categories={categories} />
      )}
    </>
  );
};

export default Sidebar;
