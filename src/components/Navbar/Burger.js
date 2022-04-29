import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import Nav from "./Nav";

const Burger = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="btn sidebar-toggle">
        <button
          className={`${
            isSidebarOpen
              ? "sidebar-toggle sidebar-toggle-open"
              : "sidebar-toggle"
          }`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <Nav />
    </>
  );
};

export default Burger;
