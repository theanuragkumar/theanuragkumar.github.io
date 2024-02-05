import React from "react";
import {
  FaCircleNotch,
  FaNewspaper,
  FaBlogger,
  FaShoppingBag,
  FaAddressBook
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:"",
  });
  const [state] = React.useState([
    
    {
      id: 7,
      icon: <FaBlogger className="commonIcons" />,
      heading: "Incognito Chat App",
      link: "https://www.chat.anucodes.com/",
      text:
        "Developed an anonymous chat app, is a secure and private messaging application designed with confidentiality in mind. Offering a safe haven for users to communicate without the fear of data exposure or privacy breaches",
    },
    {
      id: 1,
      icon: <FaShoppingBag className="commonIcons" />,
      heading: "Hawkeye - One Stop Shop",
      link: "",
      text:
        "Innovatively designed and built Hawkeye to centralize important merchandising-related data, resulting in a 40% reduction in data retrieval and analysis time.",
    },
    {
      id: 2,
      icon: <FaBlogger className="commonIcons" />,
      heading: "Anucodes - Blog App",
      link: "https://www.anucodes.com/",
      text:
        "Developed AnuCodes-Blog, a powerful and scalable blogging application, utilizing the microservice architecture. The primary goal was to create a feature-rich platform where blog writers can showcase their talent, and administrators can efficiently manage the entire ecosystem",
    },
    {
      id: 3,
      icon: <FaNewspaper className="commonIcons" />,
      heading: "News App",
      link: "https://github.com/theanuragkumar/news",
      text:
        "Developed a news app using HTML, CSS, JavaScript, BootStrap, React JS and News API where you can watch Top News Headlines,Business News, Sports News and many more... ",
    },
    {
      id: 4,
      icon: <FaAddressBook className="commonIcons" />,
      heading: "iNoteManager - Todo App",
      link: "https://github.com/theanuragkumar/iNotebook",
      text:
        "Developed a iNoteManager-Your Own Digital Notebook using  React JS and Node Js where You can login and then You can perform CRUD operation with your own notes."
    },
    {
      id: 5,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Covid-19 Predictor",
      link: "https://github.com/theanuragkumar/Covid19Predictor",
      text:
        "Developed a Covid-19 Predictor using Flask and Machine Learning Algorithm where You can predict the probability of getting Infacted from Covid-19 after entering some medical values.",
    },
    {
      id: 6,
      icon: <FaAddressBook className="commonIcons" />,
      heading: "Competency Management System",
      text:
        "The Competency Tracker System efficiently manages and tracks competencies for TCS associates and employees. It caters to Admins, Supervisors, and Employees with tailored functionalities and access to competency-related data.",
    },
  ]);
  return (
    <div className="services" id="projects">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <a href={info.link} target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}>
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="services__box-b">Know More</div>
                </div>         
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
