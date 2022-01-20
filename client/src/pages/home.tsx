import React from "react";
import styled from "styled-components";
import CalculateForm from "../components/CalculateForm";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleCalculateFormSubmit = (inputTerm: string) => {
    const inputParams = inputTerm.split("?");
    const urlParams = new URLSearchParams(inputParams[1]);
    const list = urlParams.get("list");
    const id = list || inputTerm;

    navigate(`/calculate/${id}`);
  };

  return (
    <Container>
      <div className="home__container">
        <CalculateForm calculateFormSubmit={handleCalculateFormSubmit} />
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  z-index: 50;

  & .home__container {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
`;

export default Home;
