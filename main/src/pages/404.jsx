import React, { useState } from "react";
import LightRays from "../components/background";
import "../App.css";
import IntroAnimation from "../components/intro";
import FuzzyText from "../components/FuzzyText";
import ScrollReveal from "../components/ScrollReveal";    // new component

function Page404() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="App"
      style={{
        position: "relative",
        // overflow is removed so the page can scroll down to extra content
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      {/* Intro animation */}
      {!showContent && <IntroAnimation onFinish={() => setShowContent(true)} />}

      {/* Main content */}
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
            <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
              404
            </FuzzyText>
          </h1>
          <p style={{ color: '#fff' }}>
            why'd you disobey
          </p>


        </div>
      </div>

      {/* extra content for scrolling */}
      <div style={{ padding: '2rem', color: '#fff', lineHeight: 1.6 }}>
        <div style={{ marginBottom: '3rem' }}>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
            No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <p style={{ marginBottom: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit
          amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante
          hendrerit. Donec et mollis dolor.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue
          enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a
          non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Integer vitae libero ac risus egestas placerat. Vestibulum commodo felis quis tortor.
          Ut aliquam sollicitudin leo. Cras iaculis ultricies nulla. Donec quis metus ac arcu
          malesuada accumsan sit amet quis lacus.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
          vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit
          amet, nisi.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
          elementum vulputate, nunc. Vestibulum sodales, felis vel pellentesque laoreet, velit
          magna fermentum augue, et ultricies lacus lorem varius purus.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula
          lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In
          eu justo a felis faucibus ornare vel id metus.
        </p>
      </div>
    </div>
  );
}

export default Page404;