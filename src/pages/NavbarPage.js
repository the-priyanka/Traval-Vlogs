import React from "react";
import "../components/Navbar/navbar.css";
import logo from "../assets/logo.png";
import Burger from "../components/Navbar/Burger";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { activeNav, handleLinks } = useGlobalContext();
  return (
    <div className="nav">
      <nav>
        <div className="nav-center">
          <div className="left">
            <a
              href="# "
              onClick={() => handleLinks("#")}
              className={activeNav === "#" ? "active linkA" : "linkA"}
            >
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
