import React from "react";
import LightRays from "../components/background";
import "../App.css"; // make sure this has your .center-text styles

function Main() {
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

      
        <h1>Welcome to My New Page, It's still in the making</h1>
        <p>
          You can find my current site{" "}
          <a
            href="https://arubbinali.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="temp-link"
            style={{ color: "pink"}}
          >
            here
          </a>
        </p>

        <p>
          <a
            href="./about"
            rel="noopener noreferrer"
            className="temp-link"
          >
            About
          </a>
        </p>


      </div>
    </div>
  );
}

export default Main;
