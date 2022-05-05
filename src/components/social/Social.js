import React from "react";
import "./social.css";
import { social } from "../../data";

const Social = () => {
  return (
    <div className="social">
      <ul className="social-icons">
        {social.map((icons) => {
          const { id, url, icon } = icons;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
