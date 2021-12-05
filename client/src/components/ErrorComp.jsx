import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app";

function ErrorComp({ error, id }) {
  let errorMessage = error.data.message;
  let message = null;

  const { theme } = useAppContext();

  if (
    errorMessage === `Cannot read properties of undefined (reading 'snippet')`
  ) {
    message = (
      <Container theme={theme}>
        <div className="error__container">
          <div className="error__details__container">
            <h2>Error!</h2>
            <div>
              <div>
                <div>
                  <p>
                    The playlist with id{" "}
                    <span style={{ color: "#ff0000" }}>{id}</span> is not found.
                    Please try again with a different id!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    message = (
      <Container theme={theme}>
        <div className="error__container">
          <div className="error__details__container">
            <h2>Error!</h2>
            <div>
              <div>
                <div>
                  <p>Something went wrong! Please try again</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return <>{message}</>;
}

const Container = styled.section`
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  z-index: 50;

  & .error__container {
    width: 95%;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
    box-shadow: 4px 4px 1px
      ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};

    & .error__details__container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;

      @media (max-width: 640px) {
        padding: 0.5rem;
      }
    }
  }
`;

export default ErrorComp;
