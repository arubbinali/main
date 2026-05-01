import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import IntroAnimation from "../components/intro";
import ShinyText from "../components/ShinyText";
import FuzzyText from "../components/FuzzyText";


function Main() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="App"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/ograys.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Intro animation */}
      {!showContent && <IntroAnimation onFinish={() => setShowContent(true)} />}

      {/* ✅ Main content */}
      <div
        className={`main-content ${showContent ? "fade-in" : "hidden"}`}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >

        {/* Centered Text */}
        <div
          className="center-text"
          style={{ zIndex: 2, fontFamily: "Montserrat, sans-serif" }}
        >
          <h1>
            <ShinyText
              text="Welcome to My New Page, It's still in the making"
              speed={4}
            />
          </h1>

          <p>
            You can find my digital portfolio{" "}
            <a
              href="https://arubbinali.github.io/d/"
              target="_blank"
              rel="noopener noreferrer"
              className="temp-link"
              style={{ color: "grey" }}
            >
              here
            </a>
          </p>

          <p>
            <Link to="/about" className="temp-link" style={{ color: "grey" }}>
              About
            </Link>{" "} this website
          </p>

          
          <p>
            
            <Link to="/why" className="dont-click-link">
              <FuzzyText
                fontSize="20px"
                fontWeight={100}
                fontFamily="Montserrat, sans-serif"
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover
              >
                do not click
              </FuzzyText>
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Main;