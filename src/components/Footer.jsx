import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section" id="social">


      {/* GitHub */}
      <a
        href="https://github.com/ArunSB-git"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-box"
      >
        <img
          src="https://img.icons8.com/ios-filled/100/ff3300/github.png"
          alt="GitHub"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/arun-sb-694182235"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-box"
      >
        <img
          src="https://img.icons8.com/ios-filled/100/ff3300/linkedin.png"
          alt="LinkedIn"
        />
      </a>

      {/* Gmail */}
      <a
        href="mailto:arunatnewstreettech@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-box"
      >
        <img
          src="https://img.icons8.com/ios-filled/100/ff3300/gmail.png"
          alt="Gmail"
        />
      </a>

      {/* Resume */}
      <a
        href="/assets/SDE_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-box"
      >
        <img
          src="https://img.icons8.com/ios-filled/100/ff3300/resume.png"
          alt="Resume"
        />
      </a>

    </footer>
  );
}
