import React from "react";
import {
  FaCertificate
} from "react-icons/fa";

const Certification = () => {
  const [header] = React.useState({
    mainHeader: "Certification",
    subHeading: "My Certifications",
    text:"",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaCertificate className="commonIcons"/>,
      heading: "Certified Go Language Professional",
      link: "https://www.vskills.in/certification/105144-go-language-professional-anurag-kumar",
      text:
        "Vskills - India's Largest Certification Body - Feb 2023",
    },
    {
      id: 2,
      icon: <FaCertificate className="commonIcons" />,
      heading: "Certified React JS Developer",
      link: "https://www.vskills.in/certification/105144-go-language-professional-anurag-kumar",
      text:
        "Vskills - India's Largest Certification Body - June 2023",
    },
    {
      id: 3,
      icon: <FaCertificate className="commonIcons" />,
      heading: "Building Scalable Java MicroServices with Spring Boot and Spring Cloud",
      link: "https://coursera.org/share/ca41191726ff442308dba9d357f2181a",
      text:
        "Coursera - Feb 2022"
    },
    {
      id: 4,
      icon: <FaCertificate className="commonIcons" />,
      heading: "Microsoft Certified: Azure DevOps Expert",
      link: "https://www.credly.com/badges/ddb6114f-be8e-4156-a860-afe21508a605/linked_in_profile",
      text:
        "Microsoft Azure - Dec 2022",
    },
    {
      id: 5,
      icon: <FaCertificate className="commonIcons" />,
      heading: "Microsoft Certified: Azure Developer Associate",
      link: "https://www.credly.com/badges/07409d44-dfc5-4da4-8ed2-d2d3043dfd39/linked_in_profile",
      text:
        "Microsoft Azure - Dec 2023",
    },
    {
      id: 6,
      icon: <FaCertificate className="commonIcons" />,
      heading: "Microsoft Certified Azure Fundamentals",
      link:"https://www.credly.com/badges/e07c612b-956f-49c5-a89c-afed2de5dd79/public_url",
      text:
        "Microsoft Azure - Feb 2022",
    },
  ]);
  return (
    <div className="services" id="certifications">
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

export default Certification;
