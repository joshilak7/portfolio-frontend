import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Task Management App",
      description:
        "A productivity application for organizing tasks, setting deadlines, and tracking progress with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "SCSS", "PWA", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/joshilak7",
      imageColor: "linear-gradient(45deg, var(--secondary), var(--accent))",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "A responsive web application that displays current weather and 7-day forecasts for multiple locations with interactive charts and maps.",
      technologies: [
        "JavaScript",
        "OpenWeather API",
        "Chart.js",
        "Leaflet.js",
        "Local Storage",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/joshilak7",
      imageColor: "linear-gradient(45deg, var(--accent), var(--primary))",
    },
  ]);

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <>
      <Helmet>
        <title>Projects | MERN Stack Portfolio</title>
        <meta
          name="description"
          content="Real-world MERN stack projects including full-stack and Web3 applications."
        />
        <link rel="canonical" href="https://lakkijoshi.vercel.app/projects" />
      </Helmet>
      <section
        className="projects"
        id="projects"
        style={{
          background: "rgba(30, 41, 59, 0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="container">
          <h2>My Projects</h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 50px",
            }}
          >
            Here are some of my featured projects. Each project represents
            unique challenges and solutions in web development.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px",
              marginBottom: "50px",
            }}
            className="projects-grid"
          >
            {projects.slice(0, visibleProjects).map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  background: "rgba(30, 41, 59, 0.7)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: "var(--transition)",
                  opacity: "0",
                  transform: "translateY(20px)",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: project.imageColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      transition: "var(--transition)",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    Project #{project.id}
                  </div>
                </div>

                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                      color: "var(--light)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      marginBottom: "15px",
                      color: "var(--gray)",
                      minHeight: "60px",
                    }}
                    className="project-description"
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                    className="technologies-container"
                  >
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          background: "rgba(37, 99, 235, 0.2)",
                          color: "var(--primary)",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                        }}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginTop: "20px",
                    }}
                    className="project-buttons"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px 15px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px 15px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div style={{ textAlign: "center" }}>
              <button
                onClick={loadMore}
                className="btn"
                disabled={loading}
                style={{
                  padding: "15px 40px",
                  fontSize: "1rem",
                }}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Loading...
                  </>
                ) : (
                  <>
                    <i className="fas fa-plus"></i> Load More Projects
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <style jsx="true">{`
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .project-card:hover > div:first-child > div:first-child {
            transform: scale(1.1);
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .projects-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 0 15px;
            }

            .project-card {
              margin: 0 auto;
              width: 100%;
              max-width: 400px;
              transform: none !important;
              opacity: 1 !important;
            }

            .project-card > div:first-child {
              height: 180px !important;
            }

            .project-card > div:first-child > div:first-child {
              font-size: 1.3rem !important;
              padding: 10px !important;
              word-break: break-word;
            }

            .project-card > div:last-child {
              padding: 20px !important;
            }

            h3 {
              font-size: 1.2rem !important;
              text-align: center;
            }

            .project-description {
              font-size: 0.9rem !important;
              min-height: auto !important;
              text-align: center;
              line-height: 1.5;
            }

            .technologies-container {
              justify-content: center !important;
              gap: 6px !important;
              margin-bottom: 15px !important;
            }

            .tech-tag {
              font-size: 0.75rem !important;
              padding: 4px 10px !important;
            }

            .project-buttons {
              flex-direction: column !important;
              gap: 10px !important;
            }

            .project-buttons a {
              padding: 12px !important;
              font-size: 0.95rem !important;
            }

            h2 {
              font-size: 1.8rem;
              text-align: center;
              padding: 0 20px;
            }

            p {
              font-size: 0.95rem;
              padding: 0 20px;
              margin: 0 auto 30px !important;
            }

            button.btn {
              padding: 12px 30px !important;
              font-size: 0.95rem !important;
              width: 90%;
              max-width: 300px;
            }

            .container {
              padding: 30px 0 !important;
            }
          }

          /* Extra Small Devices (Phones) */
          @media (max-width: 480px) {
            .project-card {
              border-radius: 12px !important;
            }

            .project-card > div:first-child {
              height: 160px !important;
            }

            .project-card > div:first-child > div:first-child {
              font-size: 1.2rem !important;
            }

            .project-card > div:last-child {
              padding: 15px !important;
            }

            h3 {
              font-size: 1.1rem !important;
            }

            .project-description {
              font-size: 0.85rem !important;
            }

            .tech-tag {
              font-size: 0.7rem !important;
              padding: 3px 8px !important;
            }

            h2 {
              font-size: 1.6rem;
            }

            p {
              font-size: 0.9rem;
            }
          }

          /* Small Tablets */
          @media (min-width: 481px) and (max-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(
                auto-fill,
                minmax(300px, 1fr)
              ) !important;
            }

            .project-card {
              max-width: 100%;
            }
          }

          /* Large Tablets */
          @media (min-width: 769px) and (max-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(
                auto-fill,
                minmax(300px, 1fr)
              ) !important;
              gap: 25px !important;
            }
          }

          /* Ensure images and content don't overflow on mobile */
          @media (max-width: 768px) {
            .project-card img {
              max-width: 100%;
              height: auto;
            }

            * {
              max-width: 100%;
              box-sizing: border-box;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Projects;
