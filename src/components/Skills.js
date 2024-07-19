import React from "react";
import { FaStar } from "react-icons/fa";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "Skills",
    subHeading: "My Skills",
    text:
      "",
  });
  const [state] = React.useState([
    { id: 1, heading: "Frontend", price: "HTML", star: 4 },
    { id: 2, heading: "Frontend", price: "CSS", star: 2 },
    { id: 3, heading: "Frontend", price: "JS", star: 3 },
    { id: 4, heading: "Frontend", price: "REACT JS", star: 5 },
    { id: 12, heading: "Frontend", price: "Next JS", star: 4 },
    { id: 5, heading: "Backend", price: "JAVA", star: 5 },
    { id: 6, heading: "Backend", price: "Node JS", star: 2 },
    { id: 7, heading: "Backend", price: "SpringBoot", star: 5 },
    { id: 8, heading: "Backend", price: "Go Lang", star: 5 },
    { id: 9, heading: "Devops", price: "Git", star: 5 },
    { id: 10, heading: "Devops", price: "Docker", star: 4 },
    { id: 11, heading: "Devops", price: "Kubernetes", star: 2 },
    { id: 12, heading: "Devops", price: "CI/CD", star: 2 },
    { id: 13, heading: "Database", price: "SQL", star: 3 },
    { id: 11, heading: "Database", price: "NoSQL", star: 3 },
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
                <div className="stars">
                  {[...Array(prices.star)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
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
