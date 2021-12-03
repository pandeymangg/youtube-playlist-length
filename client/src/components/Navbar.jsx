import React from "react";
import { FiYoutube } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAppContext } from "../context/app";

const Navbar = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <Container theme={theme}>
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <div className="nav__logo-container">
              <FiYoutube size={42} />
              YouTube Playlist Length
            </div>
          </Link>
        </div>

        <button
          onClick={() =>
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
          }
        >
          Change Theme
        </button>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: blue;
  max-width: 900px;
  height: 80px;
  padding: 8px 16px;
  margin: auto;
  z-index: 50;
  width: 100%;

  & .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    & .nav__logo {
      height: 100%;
      width: 80%;
      display: flex;
      align-items: center;

      & .nav__logo-container {
        font-size: 20px;
        line-height: 1;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default Navbar;
