import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

// Memoized ProjectCard component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "var(--transition)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        willChange: "transform, opacity", // Hint browser for optimization
      }}
      data-project-id={project.id}
    >
      <div
        style={{
          height: "200px",
          overflow: "hidden",
          position: "relative",
          contain: "paint", // CSS containment for performance
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
            willChange: "transform",
          }}
          className="project-image-placeholder"
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
  );
});

// Preload function for Font Awesome icons
const preloadFontAwesome = () => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.as = "style";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
};

const Projects = () => {
  // Memoize projects data to prevent unnecessary re-renders
  const projects = useMemo(
    () => [
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
        title: "Authentication System",
        description:
          "A secure authentication system with user registration, login, JWT-based authorization, protected routes, password encryption, and role-based access control.",
        technologies: ["Vue.js", "Firebase Auth", "SCSS", "JWT", "PWA"],
        liveUrl: "https://frontend-blond-pi-19.vercel.app/login",
        githubUrl: "https://github.com/joshilak7",
        imageColor: "linear-gradient(45deg, var(--secondary), var(--accent))",
      },
      {
        id: 3,
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
      // Add more projects here if needed
    ],
    []
  );

  const [visibleProjects, setVisibleProjects] = useState(2); // Start with 2 instead of 3
  const [loading, setLoading] = useState(false);

  // Memoize loadMore function to prevent unnecessary re-renders
  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 2, projects.length));
      setLoading(false);
    }, 300); // Reduced from 500ms
  }, [projects.length]);

  // Preload resources on component mount
  useEffect(() => {
    preloadFontAwesome();

    // Preconnect to critical domains
    const preconnectLinks = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://cdnjs.cloudflare.com",
    ];

    preconnectLinks.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = url;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, []);

  // Calculate visible projects to render
  const projectsToRender = useMemo(
    () => projects.slice(0, visibleProjects),
    [projects, visibleProjects]
  );

  return (
    <>
      <Helmet>
        <title>Projects | MERN Stack Portfolio</title>
        <meta
          name="description"
          content="Real-world MERN stack projects including full-stack and Web3 applications."
        />
        <link rel="canonical" href="https://lakkijoshi.vercel.app/projects" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Analytics />

      <section
        className="projects"
        id="projects"
        style={{
          background: "rgba(30, 41, 59, 0.5)",
          backdropFilter: "blur(5px)",
          contentVisibility: "auto", // Performance optimization
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
              contain: "layout style", // CSS containment for performance
            }}
            className="projects-grid"
          >
            {projectsToRender.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
                  willChange: "transform", // Hint for animation optimization
                }}
                aria-label="Load more projects"
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
          /* Critical styles first */
          .project-card {
            backface-visibility: hidden;
            transform: translateZ(0); /* GPU acceleration */
          }

          .project-card:hover {
            transform: translateY(-10px) translateZ(0);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .project-card:hover > div:first-child > div:first-child {
            transform: scale(1.1);
          }

          /* Optimize button for better INP */
          .btn {
            touch-action: manipulation; /* Remove 300ms delay on mobile */
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
        `}</style>
      </section>
    </>
  );
};

// Export as memoized component
export default memo(Projects);
