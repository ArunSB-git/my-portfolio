import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";


export default function Hero() {
  const textRef = useRef(null);

  const heading = "HI, I AM ARUN";
  const heading2 = "AUTOMATION TESTING ENGINEER";

  const content = `Dynamic automation engineer with a strong interest in transitioning to full stack software development. Possesses a solid foundation in automation testing, scripting languages, and testing frameworks, and is actively enhancing skills in frontend and backend development, including Java Spring Boot and React.js. Experienced in version control and collaborative development using GitHub. Demonstrates a strong ability to learn quickly, adapt to new technologies, and solve complex problems. Seeking opportunities to leverage automation expertise and full stack development skills to build impactful and scalable software solutions.`;

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.015,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
    id="about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 6%",
        gap: "60px",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Profile Image */}
<div className="flip-box">
  <div className="flip-box-inner">

    {/* Front */}
    <div className="flip-box-front">
      <img
        src="/assets/profile.jpg"
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)"
        }}
      />
    </div>

    {/* Back */}
    <div className="flip-box-back"> 
      
      <h3>ARUN S.B</h3>
      <p>Automation Testing Engineer</p>
      <p>Experience: 1.9 Years</p>
      <p>
  Contact:{" "}
  <a
    href="mailto:sb.arun.work@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#ff3300', textDecoration: "none" }}
  >
    G-MAIL
  </a>
</p>
<p style={{ fontSize: "0.95rem", color: "#666", marginTop: "12px" }}>
   <strong>⚠️ Note:</strong> From November 2024, I undertook a planned career
  break to explore opportunities in the government sector, while consistently
  maintaining and strengthening my technical skills.
</p>



    </div>

  </div>
</div>


      {/* Text Content */}
      <div
        ref={textRef}
        style={{
          flex: 1,
          maxWidth: "700px",
        }}
      >
        {/* Name Heading */}
<h1
  style={{
    fontFamily: "Poppins, sans-serif",
    fontSize: "3.4rem",
    fontWeight: 800,
    letterSpacing: "-1px",
    lineHeight: "1.1",
    marginBottom: "12px",
  }}
>
  {/* "HI, I AM" in gray */}
  {"HI, I AM ".split("").map((char, index) => (
    <span key={index} style={{ color: "#cbcbcb" }}>
      {char}
    </span>
  ))}

  {/* "ARUN" in red */}
  {"ARUN".split("").map((char, index) => (
    <span key={index} style={{ color: "#ff3300" }}>
      {char}
    </span>
  ))}
</h1>


        {/* Role Heading */}
        <h2
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#cbcbcb",
            marginBottom: "28px",
            letterSpacing: "0.5px",
          }}
        >
          {heading2.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "#000000",
          }}
        >
          {content.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
