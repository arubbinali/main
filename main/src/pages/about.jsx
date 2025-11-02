import React from "react";
import LightRays from "../components/background";
import "../App.css";

function About() {
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
          distortion={0.0}
          className="custom-rays"
        />
      </div>

      {/* Centered Text */}
      <div className="center-text" style={{ zIndex: 2 }}>

        <h1>About This Site</h1>
        <p>This page will soon include details about me and my work.</p>
        
        <p>
          Back to{" "}
          <a
            href="./main"
            rel="noopener noreferrer"
            className="temp-link"
          >
            Main
          </a>
        </p>

      </div>
    </div>
  );
}

export default About;
