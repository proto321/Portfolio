import { projects } from "../data/projects";
import { styles, projectModal  } from "../assets/styles";

import { useState } from "react";

export default function Projects() {

  const [revealed, setRevealed] = useState(null);
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
        {projects.map((project, index) => (
          <div key={index} className={styles.projects.card}>
            <div className={styles.projects.cardGrid}>
              {/* Left Side */}
              <div>
                <p className={styles.projects.category}>{project.category}</p>
                <h3 className={styles.projects.projectTitle}>{project.title}</h3>
                <p className={styles.projects.description}>{project.description}</p>

                <div className={styles.projects.buttonRow}>
                    {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projects.viewBtn}
                      >
                        Live Demo
                      </a> */}

                        <button
                          // onClick={() => setSelectedProject(project)}
                          onClick={() => {
                            setSelectedProject(project);
                            setCurrentImage(0);
                          }}
                          className={styles.projects.viewBtn}
                        >
                          View Screenshots
                        </button>

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
                className={`${styles.projects.preview} relative overflow-hidden cursor-pointer`}
                onClick={() =>
                  setRevealed(revealed === index ? null : index)
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${
                    revealed === index ? "blur-0 scale-100" : "blur-md scale-105"
                  }`}
                />

                {revealed !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg">
                      👁 Click to Preview
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
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