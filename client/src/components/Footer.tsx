import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useAppContext } from "../context/app";

const Footer = () => {
  const { theme } = useAppContext();

  return (
    <Container theme={theme}>
      <div className="footer__container">
        <div className="footer__heading">
          <span>
            Made by <span style={{ fontWeight: 600 }}>Anshuman Pandey</span>
          </span>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/anshuman9999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anshuman9999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 900px;
  width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  z-index: 50;

  & .footer__container {
    width: 95%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & .footer__heading {
      font-size: 1.2rem;
      font-weight: 500;
    }

    & .footer__icons {
      display: flex;
      gap: 8px;
      margin-top: 4px;

      & a {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }
      & a:visited {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }

      & a:focus {
        text-decoration: none;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
      }
    }
  }
`;

export default Footer;
