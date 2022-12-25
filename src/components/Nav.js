import React from "react";
import {Link} from 'react-scroll'
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {

  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
            <h1 className="mainHeader">Portfolio</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
              <Link to="home"  smooth={true}>Home</Link>
              </li>
              <li>
              <Link  to="projects"  smooth={true}>Projects</Link>
              </li>
              <li>
              <Link  to="about"  smooth={true}>About</Link>
              </li>
              <li>
              <Link  to="skills"  smooth={true}>Skills</Link>
              </li>
              <li>
              <Link  to="contact" spy={true} smooth={true}>Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
       <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
