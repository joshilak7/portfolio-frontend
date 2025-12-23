import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <div
          className="hero-content"
          style={{
            maxWidth: "600px",
            zIndex: "2",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          <h1
            style={{
              marginBottom: "1.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Full Stack Developer & UI/UX Designer
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              animation: "fadeInUp 1s ease-out 0.3s both",
            }}
          >
            I create beautiful, functional websites and applications that
            deliver exceptional user experiences. Let's build something amazing
            together.
          </p>

          <div
            className="hero-btns"
            style={{
              display: "flex",
              gap: "15px",
              animation: "fadeInUp 1s ease-out 0.6s both",
            }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn"
            >
              <i className="fas fa-briefcase"></i> View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn btn-outline"
            >
              <i className="fas fa-paper-plane"></i> Get In Touch
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hero-shape"
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          width: "50%",
          height: "100%",
          background: "var(--primary)",
          clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: "0.1",
          animation: "pulse 4s infinite alternate",
        }}
      ></div>

      <style jsx="true">{`
        .hero h1::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary),
            var(--secondary),
            var(--accent)
          );
          transform: scaleX(0);
          transform-origin: left;
          animation: expandLine 1.5s ease-out 0.5s forwards;
        }

        @media (max-width: 768px) {
          .hero-btns {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-shape {
            width: 100%;
            clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
