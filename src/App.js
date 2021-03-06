import React from "react";
import Title from "./Components/Title";
import "./App.css";
import Navbr from "./Components/Navbar";
import Studentslist from "./Components/Studentslist";
import { Router } from "@reach/router";
import SingleStudent from "./Components/SingleStudent";
import Blocklist from "./Components/Blocklist";
import SingleBlock from "./Components/SingleBlock";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbr />
      <Router>
        <Studentslist path="/students" />
        <SingleStudent path="/students/:student_id" />
        <Blocklist path="/blocks" />
        <SingleBlock path="/blocks/:block_slug" />
      </Router>
    </div>
  );
}

export default App;
