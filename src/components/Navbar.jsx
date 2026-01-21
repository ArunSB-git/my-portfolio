import React from "react";
import "./Navbar.css";

export default function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="navbar">
      <ul className="menu-list">

        <li className="menu-item" onClick={() => scrollToSection("about")}>
          <span className="cyber-text">ABOUT</span>
        </li>

        <li className="menu-item" onClick={() => scrollToSection("experience")}>
          <span className="cyber-text">EXPERIENCE</span>
        </li>

        <li className="menu-item" onClick={() => scrollToSection("projects")}>
          <span className="cyber-text">PROJECTS</span>
        </li>

        <li className="menu-item" onClick={() => scrollToSection("skills")}>
          <span className="cyber-text">SKILLS</span>
        </li>

        <li className="menu-item" onClick={() => scrollToSection("social")}>
          <span className="cyber-text">SOCIAL PROFILES</span>
        </li>

      </ul>
    </nav>
  );
}
