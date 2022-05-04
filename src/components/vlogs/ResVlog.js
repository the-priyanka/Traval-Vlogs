import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useVlogContext } from "../../context/vlogContext";

const ResVlog = ({ data }) => {
  const { vlogs, person } = useVlogContext();
  const [index, setIndex] = useState(0);
  const [singleVlog, setSingleVlog] = useState(data[index]);

  const nextVlog = () => {
    setSingleVlog();
  };
  const prevVlog = () => {};

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 4000);

  //   return () => clearInterval(slider);
  // }, [index]);
  return (
    <div className="recVlog">
      <ul>
        {data.map((vlog, index) => {
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
      <button className="prev" onClick={prevVlog}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextVlog}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ResVlog;
