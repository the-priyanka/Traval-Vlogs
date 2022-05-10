import React from "react";
import { social } from "../../data";
import "./contact.css";
import { Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
const SERVICE_ID = "service_ualv7ad";
const TEMPLATE_ID = "template_elaym4n";
const USER_ID = "aL5ULp7irASKMkzpl";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
        e.target.reset();
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
            <form onSubmit={handleOnSubmit}>
              <div className="row">
                <div className="input-group">
                  <input
                    control={Input}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    control={Input}
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    control={Input}
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    control={TextArea}
                    name="message"
                    placeholder="Message"
                    className="input-control"
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
