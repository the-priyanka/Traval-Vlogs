import React from "react";
import { social } from "../../data";
import "./contact.css";

const Contact = () => {
  return (
    <main className="contact-section sec-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Message"
                    className="input-control"
                    required
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button type="submit">sent massage</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>jdmenaria0018@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>91 99 **** ****</p>
            </div>

            <div className="contact-info-item">
              <h3>follow me</h3>
              <div className="social-links">
                {social.map((link) => {
                  const { id, url, icon } = link;
                  return (
                    <a
                      key={id}
                      href={url}
                      className="fab"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
