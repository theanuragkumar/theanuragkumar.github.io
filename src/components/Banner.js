import React from "react";
import Typist from 'react-typist';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "Hi, I am Anurag Kumar.",
    text:
      "Full Stack Java Developer​ having hands on experience in Spring, Spring Boot, MicroService, Rest Api, HTML, CSS, JavaScript, React Js. ",
  });
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.facebook.com/theanuragkumarofficial"><FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Anuragk60343012"><FaTwitter className="headerIcon" /> </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/theanuragkumar/"><FaLinkedin className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/anuragkumarofficial/"><FaInstagram className="headerIcon" /></a>
                  </li>
                </ul>
                <div className="banner-text">                 
                <Typist cursor={{show: false}}>
                      <h1> {state.title} </h1>
                      <p>{state.text}</p>
                </Typist>  
                
                </div>
                <div className="header__buttons">
                  <a href="https://drive.google.com/file/d/1g1-2JeP3w_3v-9S7oXJUFELSEred7qO2/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;


                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src="https://i.ibb.co/3RgZbC7/anu.png" alt="" />

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
