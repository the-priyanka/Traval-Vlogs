import React from "react";
import "./vlog.css";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { MdOutlineFullscreen } from "react-icons/md";
import { video } from "../../data";

const Vlog = () => {
  return (
    <>
      <h1 className="vlog-head">my vlog</h1>
      <div className="vlog">
        <div className="overlay"></div>
        <div className="player">
          <video
            src="../../assets/MVI_0861.MP4"
            className="video"
          ></video>
          {/* <!-- show control  --> */}
          <div className="show-controls">
            {/* <!-- controls container  --> */}
            <div className="controls-container">
              {/* <!-- progress Bar  --> */}
              <div className="progress-range" title="Seek">
                <div className="progress-bar"></div>
              </div>
              <div className="control-group">
                {/* <!-- left controls  --> */}
                <div className="controls-left">
                  {/* <!-- play/pause --> */}
                  <div className="play-controls">
                    <i
                      id="play-btn"
                      className="fas fa-play"
                      title="Play"
                    >
                      <FaPlay />
                    </i>
                  </div>
                  {/* <!-- volume  --> */}
                  <div className="volume">
                    <div className="volume-icon">
                      <i
                        className="fas fa-volume-up"
                        title="Mute"
                        id="volume-icon"
                      >
                        <FaVolumeUp />
                      </i>
                    </div>
                    <div
                      className="volume-range"
                      title="Change Volume"
                    >
                      <div className="volume-bar"></div>
                    </div>
                  </div>
                </div>
                {/* <!-- right controls  --> */}
                <div className="controls-right">
                  {/* <!-- time  --> */}
                  <div className="time">
                    <span className="time-elapsed">00:00 / </span>
                    <span className="time-duration">2:38</span>
                  </div>
                  {/* <!-- fullscreen --> */}
                  <div className="fullscreen">
                    <i className="fas fa-expand">
                      <MdOutlineFullscreen />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <form className="search-form">
          <button className="search-btn">
            <BsSearch />
          </button>
          <textarea
            name="search"
            id="search"
            placeholder="search video...."
          ></textarea>
        </form> */}

        <div className="video-container">
          <ul>
            {video.map((item) => {
              const { id, url, img, text } = item;
              return (
                <li key={id}>
                  <a href={url}>
                    <img src={img} alt="video" />
                  </a>
                  <p className="video-text">{text}</p>
                  <button className="video-btn">
                    <BsPlayCircle />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="more-video">
            <a href="https://www.youtube.com/c/NJVlogs001">
              for more videos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vlog;
