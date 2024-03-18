import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  // FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <h1 className="mainHeader">Contact Me</h1>
              </div>

              <ul className="contactCircles">
                <li>
                  <a
                    href="https://www.facebook.com/theanuragkumarofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="headerIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:theanuragkumarofficial.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope className="headerIcon" />{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/theanuragkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="headerIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/anuragkumarofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="headerIcon" />
                  </a>
                </li>
              </ul>
              <br></br>
              <p id="footer-content">
                Copyright © 2022 Anurag Kumar | Powered by Anurag Kumar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
