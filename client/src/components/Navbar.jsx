import React from "react";
import { FiYoutube } from "react-icons/fi";
import styled from "styled-components";
import { useAppContext } from "../context/app";

const Navbar = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        Change Theme
      </button>
      <div className="nav__logo">
        <div className="nav__logo-container">
          <FiYoutube size={42} />
          YouTube Playlist Length
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 8px 16px;
  background-color: olive;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .nav__logo {
    height: 100%;
    display: flex;
    align-items: center;

    & .nav__logo-container {
      font-size: 48px;
      line-height: 1;
      display: flex;
      align-items: center;
    }
  }
`;

export default Navbar;
