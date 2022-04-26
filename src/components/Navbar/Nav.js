import React from "react";
import "../Navbar/navbar.css";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { useGlobalContext } from "../../context/context";

const Nav = () => {
  const { activeNav, setActiveNav, isSidebarOpen, openSidebar } =
    useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <div className="left">
          <a href="#">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  onClick={() => setActiveNav(url)}
                  className={
                    activeNav === `${url}` ? "active linkA" : "linkA"
                  }
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="btn">
          <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
