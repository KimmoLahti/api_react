import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/getall" className="nav-link">
            Get All
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-data" className="nav-link">
            Add Data
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/update" className="nav-link">
            Update
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
