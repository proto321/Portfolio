import { projects } from "../data/projects";
import { styles, projectModal  } from "../assets/styles";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <>
    <section id="projects" className={styles.projects.section}>
      <div className={styles.projects.header}>
        <p className={styles.projects.eyebrow}>Portfolio</p>
        <h2 className={styles.projects.title}>Selected Projects</h2>
      </div>

      <div className={styles.projects.list}>
        {/* {projects.map((project, index) => (
          <div key={index} className={styles.projects.card}> */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projects.card}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
            <div className={styles.projects.cardGrid}>
              {/* Left Side */}
              <div>
                <p className={styles.projects.category}>{project.category}</p>
                <h3 className={styles.projects.projectTitle}>{project.title}</h3>
                <p className={styles.projects.description}>{project.description}</p>

                <div className={styles.projects.buttonRow}>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projects.viewBtn}
                      >
                        Live Demo
                      </a>

                      {/* <button
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImage(0);
                        }}
                        className={styles.projects.viewBtn}
                      >
                        View Project
                      </button> */}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projects.sourceBtn}
                      >
                        Source Code
                      </a>
                </div>
              </div>

              {/* Right Side */}
              {/* <div className={styles.projects.preview}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div> */}

              <div
                className={`${styles.projects.preview} cursor-pointer group overflow-hidden`}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    {/* Screenshot Modal */}
      {selectedProject && (
          <div className={projectModal.overlay}>

          {/* Modal Container */}
          <div className={projectModal.container}>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className={projectModal.closeBtn}
            >
              ✕
            </button>

            {/* Project Title */}
            <h2 className={projectModal.title}>
              {selectedProject.title}
            </h2>
            <div className={projectModal.imageWrapper}>

              {/* Previous Screenshot Button */}
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0
                      ? selectedProject.screenshots.length - 1
                      : prev - 1
                  )
                }
                className={`${projectModal.navBtn} ${projectModal.prevBtn}`}
              >
                ❮
              </button>

              {/* Current Screenshot */}
              <img
                src={selectedProject.screenshots[currentImage]}
                alt={`Screenshot ${currentImage + 1}`}
                className={projectModal.image}
              />

              {/* Next Screenshot Button */}
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === selectedProject.screenshots.length - 1
                      ? 0
                      : prev + 1
                  )
                }
                className={`${projectModal.navBtn} ${projectModal.nextBtn}`}
              >
                ❯
              </button>

            </div>

            {/* Screenshot Counter */}
            <p className={projectModal.counter}>
              {currentImage + 1} / {selectedProject.screenshots.length}
            </p>

            <div className={projectModal.thumbnails}>
              {selectedProject.screenshots.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`${projectModal.thumbnail} ${
                    currentImage === index
                      ? projectModal.thumbnailActive
                      : projectModal.thumbnailInactive
                  }`}
                />
              ))}
            </div>

          </div>
          </div>
      )}
  </>);
}