import React, { useState } from "react";
import LightRays from "../components/background";
import "../App.css";
import IntroAnimation from "../components/intro";
import ShinyText from "../components/ShinyText"; // ✅ import animation

function About() {
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
      {/* ✅ Intro animation */}
      {!showContent && <IntroAnimation onFinish={() => setShowContent(true)} />}

      {/* ✅ About content */}
      <div
        className={`about-content ${showContent ? "fade-in" : "hidden"}`}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Light Rays Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={window.innerWidth < 1000 ? 9999 : 0.8}
            rayLength={window.innerWidth < 1000 ? 9999 : 3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.01}
            className="custom-rays"
          />
        </div>

        {/* Centered Text */}
        <div className="center-text" style={{ zIndex: 2 }}>
          <h1>
            <ShinyText text="About This Site" speed={4} />
          </h1>
          <p>
            <ShinyText text="This page will soon include details about me and my work." speed={5} />
          </p>

          <p>
            Back to{" "}
            <a href="/main/#/main" rel="noopener noreferrer" className="temp-link">
              <ShinyText text="Main" speed={4} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
