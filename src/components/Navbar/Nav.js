import React from "react";
import "../Navbar/navbar.css";
import { links } from "../../data";
import { useGlobalContext } from "../../context/context";

const Nav = () => {
  const { activeNav, isSidebarOpen, handleLinks } =
    useGlobalContext();

  return (
    <div
      className={
        isSidebarOpen ? "nav-right show-nav-right" : "nav-right"
      }
    >
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a
                href={url}
                onClick={() => handleLinks(url)}
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
    </div>
  );
};

export default Nav;
