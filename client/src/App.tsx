import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Calculate from "./pages/calculate";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { AppProvider, ContextState } from "./context/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useThemeDetector } from "./hooks/useThemeDetector";
import Footer from "./components/Footer";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  const isDarkTheme = useThemeDetector();
  const defaultTheme = isDarkTheme ? "dark" : "light";

  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  const contextValue: ContextState = {
    theme,
    setTheme,
  };

  return (
    <AppProvider value={contextValue}>
      <Container theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/calculate/:playlistId"
            element={
              <>
                <Home />
                <Calculate />
              </>
            }
          />

          <Route path="*" element={<PageNotFound />} />
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
  transition: background-color ease 0.4s;
`;

export default App;
