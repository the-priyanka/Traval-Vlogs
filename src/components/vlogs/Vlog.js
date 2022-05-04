import React from "react";
import "./vlog.css";
import SearchForm from "./SearchForm";
import ResVlog from "./ResVlog";
import { useVlogContext } from "../../context/vlogContext";

const Vlog = () => {
  const { isLoading, vlogs } = useVlogContext();

  const filterVolgs = vlogs.slice(0, 6);
  console.log(filterVolgs);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <h1 className="vlog-head">my vlog</h1>
      <div className="vlog">
        <div className="video-container">
          <SearchForm />
          {/* <ResVlog data={filterVolgs} /> */}
          <ul className="fullScreen">
            {filterVolgs.map((vlog, index) => {
              const {
                url,
                title,
                frameBorder,
                allow,
                allowFullScreen,
              } = vlog;
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
          <div className="more-video">
            <a
              href="https://www.youtube.com/c/NJVlogs001"
              target="_blank"
              rel="noreferrer"
            >
              for more videos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vlog;
