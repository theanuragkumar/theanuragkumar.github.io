import React from "react";

const About = () => {
  const [header] = React.useState({
    mainHeader: "About Me",
    subHeader: "About Me",
    text:
      " ",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Anurag Kumar" },
    { id: 2, title: "Email:", text: "theanuragkumarofficial@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 8540999094" },
    { id: 4, title: "Linkedin", text: "theanuragkumar" },
  ]);
  return (
    <div className="about" id="about">
      <div className="about-container container">
        <div className="common">
        <h1 className="heading">{header.mainHeader}</h1>
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="https://i.ibb.co/3RgZbC7/anu.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi, </h1>
              <div className="about__info-p1">
              As a Full Stack Web Developer with 3 years of experience, I have a strong foundation in developing scalable and performant web applications using a variety of technologies. My experience includes developing applications with multiple technologies like Java Spring Boot, Go lang, React JS, Docker, and many more.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
