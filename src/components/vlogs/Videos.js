import React from "react";

const Videos = ({ items }) => {
  const sliceItems = items.slice(0, 6);
  return (
    <ul className="fullScreen">
      {sliceItems.map((vlog, index) => {
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
