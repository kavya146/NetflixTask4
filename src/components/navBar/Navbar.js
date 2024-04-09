import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-container">
        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
