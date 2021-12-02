import React from "react";
import CalculateForm from "./calculateForm/calculateForm";

function Home({ history }) {
  const handleCalculateFormsubmit = (inputTerm) => {
    const inputParams = inputTerm.split("?");
    const urlParams = new URLSearchParams(inputParams[1]);
    const id = urlParams.get("list") ? urlParams.get("list") : inputTerm;

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
        <CalculateForm
          calculateFormSubmit={handleCalculateFormsubmit}
        ></CalculateForm>
      </div>
    </div>
  );
}

export default Home;
