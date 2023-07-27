import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certification from "./components/Certifications";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Projects />
      <About />
      <Skills />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;
