import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";
import projectsData from "./Projectsdata"; // Import your project data
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      {/* <h1>Portfolio</h1> */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.4 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
