import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Landingpage.css";
import About from "../About/About";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function Landingpage() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [activeContent, setActiveContent] = useState("About");

  const renderContent = () => {
    switch (activeContent) {
      case "About":
        return (
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "2rem",
                marginTop: "-60px",
                marginBottom: "50px",
                fontWeight: "900",
                textDecorationColor: "yellow",
              }}
            >
              <u>About</u> Me
            </p>
            <About />
          </div>
        );
      case "Resume":
        return <div>Resume Content</div>;
      case "Portfolio":
        return <div>Portfolio Content</div>;
      case "Blog":
        return <div>Blog Content</div>;
      case "Contact":
        return <div>Contact Content</div>;
      default:
        return <div>About Content</div>;
    }
  };

  return (
    <div className="landing-page">
      <div className="particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "black",
              },
            },
            fpsLimit: 40,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="left-container">
        <div className="profile-picture"></div>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            color: "#ffd500",
          }}
        >
          <Typewriter
            words={["Himanshu Saini"]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>
        <p>himanshu.dcrust@gmail.com</p>
        <p>9817770664</p>
        <div className="social-icons">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/himanshu-saini-958565248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="gmail"
            href="mailto:himanshu.dcrust@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            className="github"
            href="https://github.com/Himanshu-Saini-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/himanshu.saiini/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="right-container">
        <div className="app-bar">
          <ul>
            {["About", "Resume", "Portfolio", "Blog", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => setActiveContent(item)}
                className={activeContent === item ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Landingpage;
