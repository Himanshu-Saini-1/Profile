import React from "react";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: "1rem",
        textAlign: "center",
        padding: "2rem",
        margin: "2rem",
        color: "white",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.9)",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          lineHeight: "1.5rem",
          wordSpacing: "0.1rem",
          fontSize: "1rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#ffbc09",
        }}
      >
        Hello! I’m Himanshu Saini, a driven and ambitious data analysis
        enthusiast currently pursuing my degree in Computer Science. My academic
        journey has equipped me with a strong foundation in programming and
        statistical tools, fostering my critical thinking and problem-solving
        skills. Throughout my career, I've had the opportunity to work with
        leading companies, contributing to data-driven decision-making and
        transforming complex datasets into actionable insights. My ability to
        present findings clearly to stakeholders ensures impactful business
        improvements. My ambition is to delve deeper into data science and
        machine learning, areas I believe will revolutionize industries. By
        staying at the forefront of technological advancements and continually
        upgrading my skills, I aim to drive significant progress in the field of
        data analysis. Thank you for visiting my website. I look forward to
        connecting and exploring opportunities to collaborate and innovate
        together.
      </div>
    </div>
  );
}

export default About;
