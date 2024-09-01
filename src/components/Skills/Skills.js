import React from "react";
import {
  FaJava,
  FaPython,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { SiPandas, SiGit, SiMongodb, SiJavascript } from "react-icons/si";
import "./Skills.css";
import { AiOutlineDatabase } from "react-icons/ai";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Git Bash", icon: <SiGit /> },
  { name: "DSA", icon: <AiOutlineDatabase /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <SiJavascript /> },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2 style={{ fontSize: "1.5rem" }}>Skills : </h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
