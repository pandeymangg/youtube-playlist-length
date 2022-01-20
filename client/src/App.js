import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Calculate from "./pages/calculate";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/app";
import { useLocalState } from "./hooks/useLocalState";
import { useThemeDetector } from "./hooks/useThemeDetector";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const isDarkTheme = useThemeDetector();
  const defaultTheme = isDarkTheme ? "dark" : "light";

  const [theme, setTheme] = useLocalState("theme", defaultTheme);

  return (
    <AppProvider
      value={{
        theme,
        setTheme,
      }}
    >
      <Container theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate">
            <Route index element={<Home />} />
            <Route
              path=":playlistId"
              element={
                <>
                  <Home />
                  <Calculate />
                </>
              }
            />
          </Route>
        </Routes>
        <Footer />
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
