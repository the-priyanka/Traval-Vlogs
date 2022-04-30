import React, { useRef } from "react";
import { social } from "../../data";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z717v72",
        "template_pxeqac5",
        form.current,
        "-rNI0WTd7bXK5HF4O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="input-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name="message"
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
