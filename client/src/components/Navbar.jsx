import React from "react";
import { FiYoutube } from "react-icons/fi";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
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
              <FiYoutube style={{ marginTop: 4 }} size={40} />
              <span>YouTube Playlist Length</span>
            </div>
          </Link>
        </div>

        <div className="nav__icons">
          <span
            onClick={() =>
              setTheme((theme) => (theme === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? (
              <MdNightlightRound size={16} />
            ) : (
              <MdLightMode size={16} />
            )}
          </span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  max-width: 900px;
  width: 100%;
  height: 80px;
  margin: auto;
  z-index: 50;

  & .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;

    & .nav__logo {
      height: 100%;
      display: flex;
      align-items: center;

      & a {
        text-decoration: none;
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
      }

      & .nav__logo-container {
        font-size: 24px;
        line-height: 1;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    & .nav__icons {
      height: 100%;
      display: flex;
      align-items: center;

      & span {
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
