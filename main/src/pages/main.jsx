import React, { useState } from "react";
import LightRays from "../components/background";
import "../App.css";
import IntroAnimation from "../components/intro";
import ShinyText from "../components/ShinyText"; // ✅ import animation

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
            <ShinyText text="Welcome to My New Page, It's still in the making" speed={4} />
          </h1>
          <p>
            You can find my current site{" "}
            <a
              href="https://arubbinali.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="temp-link"
              style={{ color: "pink" }}
            >
              here
            </a>
          </p>

          <p>
            <a href="/main/#/about" rel="noopener noreferrer" className="temp-link">
              <ShinyText text="About" speed={4} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
