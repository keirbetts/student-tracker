import React from "react";
import Title from "./Components/Title";
import "./App.css";
import Navbar from "./Components/Navbar";
import Studentslist from "./Components/Studentslist";
import { Router } from "@reach/router";
import SingleStudent from "./Components/SingleStudent";

function App() {
  return (
    <div>
      <Title />
      <Navbar />
      <Router>
        <Studentslist path="/students" />
        <SingleStudent path="/students/:student_id" />
      </Router>
    </div>
  );
}

export default App;
