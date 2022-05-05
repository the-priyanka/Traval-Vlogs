import React from "react";
import "./footer.css";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <footer>
      <span>
        Created By The Priyanka | &copy; {date} All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
