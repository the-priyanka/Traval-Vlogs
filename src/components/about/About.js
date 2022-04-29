import React from "react";
import "./about.css";

const About = () => {
  return (
    <main>
      <div className="about-container">
        <div className="left">
          <div className="about-content">
            <h1>THIS IS MY STORY</h1>
            <p>
              I'm Nj Menaria ,I have been traveling in India for a
              long time like -
              Chandigarh-Amritsar-Dalhousie-Dharamshala-Mcleodganj-Dehradun-Mussoorie-Nepal-Goa-Mumbai-Rajshthan-J&K...ETC
              In the past, there was no travel videos ,Now I am
              traveling full time in less money , I love solo
              travelling & meeting people.I started making travel
              web-series in Hindi with full of travel tips and tricks,
              especially for budget travel. My dream is to inspire
              people to explore this beautiful world and learn the
              best things to make our world a better place to live in.{" "}
            </p>
            <div className="about-btn">
              <a href="#contact">follow me</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="about-img"></div>
        </div>
      </div>
    </main>
  );
};

export default About;
