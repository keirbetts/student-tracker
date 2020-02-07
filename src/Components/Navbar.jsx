import React from "react";
import { Link } from "@reach/router";
//import { Navbar, Nav } from "react-bootstrap";

const Navbr = () => {
  return (
    <nav>
      <p className="navItem">
        <Link to="/students">Students</Link>
      </p>
      <p className="navItem">
        <Link to="/blocks">Blocks</Link>
      </p>
    </nav>
  );
};

export default Navbr;
