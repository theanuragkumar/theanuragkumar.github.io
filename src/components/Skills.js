import React from "react";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "Skills",
    subHeading: "My Skills",
    text:
      "",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Frontend",
      price: "HTML",
    
    },
    {
      id: 2,
      heading: "Frontend",
      price: "CSS",
     
    },
    {
      id: 3,
      heading: "Frontend",
      price: "JS",
     
    },
    {
      id: 4,
      heading: "Frontend",
      price: "REACT JS",
     
    },
    {
      id: 12,
      heading: "Frontend",
      price: "Next JS",
     
    },
    {
      id: 5,
      heading: "Backend",
      price: "JAVA",
     
    },
    {
      id: 6,
      heading: "Backend",
      price: "Node JS",
     
    },
    {
      id: 7,
      heading: "Backend",
      price: "SpringBoot",
     
    },
    {
      id: 8,
      heading: "Backend",
      price: "Go Lang",
     
    },
    {
      id: 9,
      heading: "Devops",
      price: "Git",
     
    },
    {
      id: 10,
      heading: "Devops",
      price: "Docker",
     
    },
    {
      id: 11,
      heading: "Devops",
      price: "Kubernetes",
     
    },
    {
      id: 12,
      heading: "Devops",
      price: "CI/CD",
     
    },
    {
      id: 13,
      heading: "Database",
      price: "SQL",
     
    },
    {
      id: 11,
      heading: "Database",
      price: "NoSQL",
     
    },
  ]);
  return (
    <div className="prices" id="skills">
      <div className="container">
        <div className="common">
        <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  {prices.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
