import React from "react";

const Videos = ({ items }) => {
  return (
    <ul className="fullScreen">
      {items.map((vlog, index) => {
        const { url, title, frameBorder, allow, allowFullScreen } =
          vlog;
        return (
          <li key={index}>
            <iframe
              src={url}
              title={title}
              frameBorder={frameBorder}
              allow={allow}
              allowFullScreen={allowFullScreen}
            ></iframe>
          </li>
        );
      })}
    </ul>
  );
};

export default Videos;