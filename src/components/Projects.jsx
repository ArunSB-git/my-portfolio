import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="experience">


      {/* 1️⃣ EXPERIENCE – FULL WIDTH */}
      <h2 style={{ color: '#ff3300'}}>WORK EXPERIENCE:</h2>
      <div className="experience-box">
        

        <div className="experience-content">
          <h3>Associate Automation Testing Engineer</h3>
          <span className="date">FEB 2023 – NOV 2024</span>

          <h4>NEW STREET TECH, Bangalore – FinTech</h4>

          <p>
            Developed automated testing frameworks using Selenium and Appium for web and mobile apps, and Rest Assured for API testing. Analyzed test results, identified defects, and provided actionable feedback. Maintained documentation for test plans, cases, and frameworks to streamline processes.
          </p>
        </div>
      </div>

<h2 style={{ color: '#ff3300'}}id="projects">PERSONAL PROJECTS:</h2>
{/* 2️⃣ PROJECTS – 2 COLUMNS */}
<div className="projects-grid">


  {/* Trackify */}
  <div className="project-card project-flex">
    {/* LEFT */}
    <div className="project-left">
      <a
        href="https://trackify-client-wy2i.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/circle-cropped.png"
          alt="Trackify App"
          className="project-image"
        />
      </a>

      <a
        href="https://trackify-client-wy2i.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-title-link"
      >
        Trackify Application
      </a>
    </div>

    {/* RIGHT */}
    <div className="project-right">
      <p><strong>Purpose:</strong> Task tracking and productivity management application.</p>
      <p><strong>Backend:</strong> Java Spring Boot, REST APIs, Swagger</p>
      <p><strong>Database:</strong> PostgreSQL</p>
      <p><strong>Frontend:</strong> React (Vite)</p>
      <p><strong>Deployment:</strong> GitHub, Render</p>
    </div>
  </div>

  {/* Spendify */}
  <div className="project-card project-flex">
    {/* LEFT */}
    <div className="project-left">
      <a
        href="https://spendify-client-sesf.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/favivon.png"
          alt="Spendify App"
          className="project-image"
        />
      </a>

      <a
        href="https://spendify-client-sesf.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-title-link"
      >
        Spendify Application
      </a>
    </div>

    {/* RIGHT */}
    <div className="project-right">
      <p><strong>Purpose:</strong> Personal finance management application to track income and expenses.</p>
      <p><strong>Backend:</strong> Java Spring Boot, REST APIs, Swagger</p>
      <p><strong>Database:</strong> PostgreSQL</p>
      <p><strong>Frontend:</strong> React (Vite)</p>
      <p><strong>Deployment:</strong> GitHub, Render</p>
    </div>
  </div>

</div>


      {/* 3️⃣ SKILLS – 5 COLUMNS */}
<h2  id="skills" style={{ color: '#ff3300'}}>PERSONAL SKILLS:</h2>
<div className="skills-table">


  {/* Tools */}
  <div className="skill-row">
    <div className="skill-name">Tools</div>
    <div className="skill-logos">
      <img src="/assets/skills/git.png" alt="Git" />
      <img src="/assets/skills/postman.png" alt="Postman" />
      <img src="/assets/skills/jira.png" alt="JIRA" />
      <img src="/assets/skills/intellij.png" alt="IntelliJ" />
      <img src="/assets/skills/vscode.png" alt="VS Code" />
      <img src="/assets/skills/selenium.png" alt="Selenium" />
      <img src="/assets/skills/appium.webp" alt="Appium" />
      <img src="/assets/skills/jenkins.png" alt="Jenkins" />
      <img src="/assets/skills/github.png" alt="GitHub" />
    </div>
  </div>

  {/* Languages */}
  <div className="skill-row">
    <div className="skill-name">Languages</div>
    <div className="skill-logos">
      <img src="/assets/skills/java.png" alt="Java" />
      <img src="/assets/skills/javascript.png" alt="JavaScript" />
      <img src="/assets/skills/python.png" alt="Python" />
    </div>
  </div>

  {/* Frameworks */}
  <div className="skill-row">
    <div className="skill-name">Frameworks</div>
    <div className="skill-logos">
      <img src="/assets/skills/springboot.png" alt="Spring Boot" />
      <img src="/assets/skills/testng.png" alt="TestNG" />
      <img src="/assets/skills/cucumber.jpeg" alt="Cucumber" />
    </div>
  </div>

  {/* Documentation */}
  <div className="skill-row">
    <div className="skill-name">Documentation</div>
    <div className="skill-logos">
      <p >Test Cases </p>
      <p >Test Reports</p>
      <p >Test Data</p>
    </div>
  </div>

  {/* Other Skills */}
  <div className="skill-row">
    <div className="skill-name">Other Skills</div>
    <div className="skill-logos">
      <img src="/assets/skills/react.png" alt="React" />
      <img src="/assets/skills/postgresql.png" alt="PostgreSQL" />
      <img src="/assets/skills/mongodb.png" alt="MongoDB" />
      <img src="/assets/skills/excel.png" alt="Excel" />
      <img src="/assets/skills/pandas.png" alt="Pandas" />
    </div>
  </div>

</div>


    </section>
  );
}
