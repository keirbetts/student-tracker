import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/students">Students</Link>
      <p><Link to="/blocks">Blocks</Link></p>
    </nav>
  );
};

export default Navbar;
