import React from "react";


import { SiTcs, SiIbm } from "react-icons/si";

const Experience = () => {
    const [header] = React.useState({
        mainHeader: "Experience",
        subHeading: "My Experience",
        text: "",
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <SiIbm className="commonIcons" />,
            heading: "International Business Machines (IBM)",
            role: "Application Developer",
            duration: "June 2024 - Current",
            text: "",
            skills: ["Go Lang", "React JS", "Kafka", "Yugabyte", "Prometheus", "Docker", "kubernetes ", "Grafana"]
        },
        {
            id: 2,
            icon: <SiTcs className="commonIcons" />,
            heading: "Tata Consultancy Services (TCS)",
            role: "System Engineer - Digital Cadre",
            duration: "July 2021 - June 2024",
            text: `
                <ul>
                    <li>Designed, developed, and maintained microservices architecture using Java and Spring Boot, facilitating efficient data processing and retrieval within the item flow ecosystem.</li>
                    <li>Implemented RESTful APIs to enable seamless interaction between various components, ensuring smooth data exchange and interoperability.</li>
                    <li>Leveraged Go Lang to optimize performance-critical modules, enhancing the scalability and responsiveness of the application.</li>
                    <li>Integrated Kafka messaging system to establish asynchronous communication channels, enabling real-time data streaming and event-driven processing.</li>
                    <li>Utilized React JS and Redux to create responsive and intuitive user interfaces, enhancing user experience and streamlining frontend development processes.</li>
                </ul>
            `,
            skills: ["Java", "Spring Boot", "Go Lang", "React JS", "Kafka", "Docker", "kubernetes", "Grafana"]
        }
    ]);
    return (
        <div className="services" id="experience">
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
                            <div className="bgMain">
                                <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div className="services__box">
                                        <div className="flex">
                                            <div>{info.icon}</div>
                                            <div className="services__box-header"><b>{info.heading}</b></div>
                                        </div>

                                        <div className="flex space-between">
                                            <div className="services__box-header">{info.role}</div>
                                            <div>{info.duration}</div>
                                        </div>
                                        <div
                                            className="services__box-p"
                                            dangerouslySetInnerHTML={{ __html: info.text }}
                                        ></div>
                                        <div className="skills__container">
                                            {
                                                info.skills.map((s) => (
                                                    <div className="skills__tag">{s}</div>
                                                ))
                                            }
                                        </div>

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

export default Experience;
