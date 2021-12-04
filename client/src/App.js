import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Calculate from "./pages/calculate";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/app";
import { useLocalState } from "./hooks/useLocalState";
import "./App.css";

function App() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <AppProvider
      value={{
        theme,
        setTheme,
      }}
    >
      <Container theme={theme}>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/calculate/:playlistId" component={Calculate} />
      </Container>
    </AppProvider>
  );
}

const Container = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#212121")};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Inter", sans-serif;
`;

export default App;
