import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Ready-EFT</h1>
      </header>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/join">
            Join
          </Link>
        </nav>
    </div>
  );
};

export default Header;
