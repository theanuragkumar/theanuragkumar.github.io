import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
