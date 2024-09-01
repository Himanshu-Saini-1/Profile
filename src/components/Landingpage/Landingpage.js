import React, { useState, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Landingpage.css";
import About from "../About/About";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Cardcomponent from "../Card/Card";
import "../../assests/data_science.png";
import Web from "../../assests/web.png";
import java from "../../assests/java.png";
import data from "../../assests/data_science.png";
import Webdev from "../../assests/webdev.png";
import Resume from "../Resume/Resume";
import Education from "../Resume/Education";
import { Divider } from "@mui/material";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../ContactForm/Contact";

function Landingpage() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
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
            <p style={headerStyle}>
              <u>About</u> Me
            </p>
            <About />
            <p style={subHeaderStyle}>What I'm doing</p>
            <main className="main">
              {cardData.map((data, index) => (
                <div key={index}>
                  <Cardcomponent
                    heading={data.heading}
                    image={data.image}
                    text={data.text}
                  />
                </div>
              ))}
            </main>
          </div>
        );
      case "Resume":
        return (
          <div
            style={{
              fontfamily: "monospace",
              fontSize: "1.5rem",
              marginTop: "-70px",
              marginBottom: "20px",
              fontWeight: "400",
            }}
          >
            <ContentHeader title="Resume" />
            <div style={{ marginTop: "30px" }}>
              <h6>Experience :</h6>
              <Resume />
              <Divider style={{ backgroundColor: "white", height: "1px" }} />
            </div>
            <div style={{ marginTop: "30px" }}>
              <h6>Education :</h6>
              <Education />
              <Divider
                style={{
                  backgroundColor: "white",
                  height: "1px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <container>
              {/* <heading
                style={{
                  fontfamily: "sans-serif",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  fontWeight: "400",
                }}
              >
                SKILLS :
              </heading> */}
              <Skills />
            </container>
          </div>
        );
      case "Portfolio":
        return (
          <div>
            <ContentHeader title="Portfolio" />
            <div>
              <Portfolio />
            </div>
          </div>
        );
      case "Blog":
        return <ContentHeader title="Blog" />;
      case "Contact":
        return (
          <div>
            <ContentHeader title="Contact" />
            <div>
              <Contact />
            </div>
          </div>
        );
      default:
        return <ContentHeader title="About Me" />;
    }
  };

  return (
    <div className="landing-page">
      <div className="particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
      <div className="left-container">
        <div className="profile-picture"></div>
        <h1 style={typewriterStyle}>
          <Typewriter
            style={{ color: "rgb(222 235 98)", fontFamily: "monospace" }}
            words={["Himanshu Saini"]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>
        {/* <p>himanshu.dcrust@gmail.com</p>
        <p>9817770664</p> */}
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className={link.className}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
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

const headerStyle = {
  fontFamily: "monospace",
  fontSize: "2rem",
  marginTop: "-60px",
  marginBottom: "20px",
  fontWeight: "900",
  textDecorationColor: "yellow",
};

const subHeaderStyle = {
  fontWeight: "600",
  fontSize: "1.2rem",
  marginBottom: "10px",
};

const typewriterStyle = {
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  color: "rgb(222 235 98)",
};

const particlesOptions = {
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
};

const cardData = [
  { heading: "Web Design", image: Web, text: "" },
  {
    heading: "Data Science",
    image: data,
    text: "",
  },
  { heading: "Java development", image: java, text: "" },
  { heading: "Web development", image: Webdev, text: "" },

  // Add more card data as needed
];

const socialLinks = [
  {
    className: "linkedin",
    href: "https://www.linkedin.com/in/himanshu-saini-958565248/",
    icon: <FaLinkedin />,
  },
  {
    className: "gmail",
    href: "mailto:himanshu.dcrust@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    className: "github",
    href: "https://github.com/Himanshu-Saini-1/",
    icon: <FaGithub />,
  },
  {
    className: "instagram",
    href: "https://www.instagram.com/himanshu.saiini/?hl=en",
    icon: <FaInstagram />,
  },
];

const ContentHeader = ({ title }) => (
  <div>
    <p style={headerStyle}>
      <u>{title}</u>
    </p>
  </div>
);

export default Landingpage;
