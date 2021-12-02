import React from "react";
import CalculateForm from "../../components/CalculateForm";

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
    <div className="container offset-s6">
      <h3 style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
        <i style={{ color: "red" }} className="fab fa-youtube"></i> YouTube
        Playlist Length
      </h3>
      <br></br>
      <div className="row">
        <CalculateForm calculateFormSubmit={handleCalculateFormSubmit} />
      </div>
    </div>
  );
}

export default Home;
