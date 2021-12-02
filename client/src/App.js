import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { FiYoutube } from "react-icons/fi";

import Calculate from "./pages/calculate";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <Container>
      <Navbar>
        <div className="nav__logo">
          <div className="nav__logo-container">
            <FiYoutube size={42} />
            YouTube Playlist Length
          </div>
        </div>
      </Navbar>

      <Route path="/" component={Home} />
      <Route path="/calculate/:playlistId" component={Calculate} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Noto Sans JP, sans-serif;
`;

const Navbar = styled.div`
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

export default App;
