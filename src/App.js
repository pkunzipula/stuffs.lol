import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import AddStuffs from "./AddStuffs";
import ShowStuffs from "./ShowStuffs";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <AddStuffs path="add-stuffs" />
        <ShowStuffs path="show-stuffs" />
      </Router>
    </div>
  );
}

export default App;
