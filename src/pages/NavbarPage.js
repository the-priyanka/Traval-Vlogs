import React from "react";
import "../components/Navbar/navbar.css";
import logo from "../assets/logo.png";
import Burger from "../components/Navbar/Burger";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <div className="nav-center">
          <div className="left">
            <a href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <Burger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
