import React, { useState, useEffect } from "react";

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
          Here are some of my featured projects. Each project represents unique
          challenges and solutions in web development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px",
            marginBottom: "50px",
          }}
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

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
