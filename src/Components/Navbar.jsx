import React from "react";
import { Link } from "@reach/router";
import { Navbar, Nav } from "react-bootstrap";

const Navbr = () => {
  return (
    <Navbar>
      <Nav>
        <Nav.Link className="navItem">
          <Link to="/students">Students</Link>
        </Nav.Link>
        <Nav.Link className="navItem">
          <Link to="/blocks">Blocks</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbr;
