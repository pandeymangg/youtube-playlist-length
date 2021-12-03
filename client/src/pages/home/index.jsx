import React from "react";
import styled from "styled-components";
import CalculateForm from "../../components/CalculateForm";
import { FiYoutube } from "react-icons/fi";
import { useAppContext } from "../../context/app";

function Home({ history }) {
  const { theme } = useAppContext();

  const handleCalculateFormSubmit = (inputTerm) => {
    const inputParams = inputTerm.split("?");
    const urlParams = new URLSearchParams(inputParams[1]);
    const list = urlParams.get("list");
    const id = list || inputTerm;

    history.push({
      pathname: `/calculate/${id}`,
    });
  };

  return (
    <Container>
      <div>
        <div className="">
          <CalculateForm calculateFormSubmit={handleCalculateFormSubmit} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 100%;
`;

export default Home;
