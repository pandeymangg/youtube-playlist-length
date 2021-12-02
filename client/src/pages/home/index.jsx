import React from "react";
import styled from "styled-components";
import CalculateForm from "../../components/CalculateForm";
import { FiYoutube } from "react-icons/fi";

function Home({ history }) {
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
        <div className="main-heading">
          <div>
            <FiYoutube size={42} color="red" />
            <span>YouTube Playlist Length</span>
          </div>
        </div>

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

  & .main-heading {
    font-size: 48px;
    line-height: 1;

    & div {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`;

export default Home;
