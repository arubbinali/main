import React, { useState } from "react";
import LightRays from "../components/background";
import "../App.css";
import IntroAnimation from "../components/intro";
import FuzzyText from "../components/FuzzyText";
import ScrollReveal from "../components/ScrollReveal";

function Why() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="App"
      style={{
        position: "relative",
        height: "auto",
        overflow: "visible",
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      {/* fixed background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
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

      {/* content wrapper sits above fixed background */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Intro animation */}
        {!showContent && (
          <IntroAnimation onFinish={() => setShowContent(true)} />
        )}

        {/* Main content occupies full viewport and centers children */}
        <div
          className={`main-content ${showContent ? "fade-in" : "hidden"}`}
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Centered Text */}
          <div className="center-text" style={{ zIndex: 2 }}>
            <h1>
              <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
                ?
              </FuzzyText>
            </h1>
            <p style={{ color: "#fff" }}>why'd you disobey</p>
          </div>
        </div>
      </div>

      {/* Scrollable content - starts at bottom of viewport + padding for scroll */}
      <div
        style={{
          padding: "clamp(.5rem, 5vw, 4rem)",
          paddingTop: "100vh",
          color: "#fff",
          lineHeight: 1.8,
          minHeight: "auto",
        }}
      >
        {/* ScrollReveal quote */}
        <div style={{ marginBottom: "clamp(20rem, 8vw, 6rem)" }}>
          <ScrollReveal
            baseOpacity={0.01}
            enableBlur
            baseRotation={5}
            blurStrength={40}
          >
            what you're looking for in life isn't here
            what you're looking for in life isn't here
            what you're looking for in life isn't here
          </ScrollReveal>
        </div>
        <div style={{ height: "clamp(10rem, 40vh, 60rem)" }} />
      </div>
    </div>
  );
}

export default Why;