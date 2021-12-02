import React from "react";
import { Route } from "react-router-dom";
import Calculate from "./pages/calculate";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div id="main">
      <div>
        <Route path="/" component={Home} />
        <Route path="/calculate/:playlistId" component={Calculate} />
      </div>
    </div>
  );
}

export default App;
