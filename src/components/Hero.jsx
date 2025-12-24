import React from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Lakki Joshi | Full Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Lakki Joshi is a full stack developer and UI/UX designer based in India."
        />
        <meta
          name="keywords"
          content="Lakki Joshi, Full Stack Developer, UI/UX Designer, MERN Stack, Portfolio"
        />
        <meta property="og:title" content="Lakki Joshi Portfolio" />
        <meta
          property="og:description"
          content="MERN Stack Developer Portfolio"
        />
        <meta property="og:url" content="https://lakkijoshi.vercel.app" />
        <link rel="canonical" href="https://lakkijoshi.vercel.app" />
      </Helmet>
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
              deliver exceptional user experiences. Let's build something
              amazing together.
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

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .hero {
              height: auto;
              min-height: 100vh;
              padding: 60px 20px;
              text-align: center;
            }

            .container {
              width: 100%;
              padding: 0 15px;
            }

            .hero-content {
              max-width: 100% !important;
              margin: 0 auto;
              padding: 20px 0;
            }

            .hero h1 {
              font-size: 2.2rem;
              line-height: 1.3;
              margin-bottom: 1rem !important;
            }

            .hero p {
              font-size: 1.1rem !important;
              line-height: 1.6;
              margin-bottom: 2rem !important;
              padding: 0 10px;
            }

            .hero-btns {
              flex-direction: column;
              align-items: center !important;
              gap: 12px !important;
              width: 100%;
            }

            .hero-btns .btn {
              width: 100%;
              max-width: 280px;
              padding: 12px 20px;
              font-size: 1rem;
              margin: 0 auto;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            }

            /* Hide hero shape on mobile */
            .hero-shape {
              display: none !important;
            }
          }

          /* Small Mobile Screens */
          @media (max-width: 480px) {
            .hero {
              padding: 50px 15px;
            }

            .hero h1 {
              font-size: 1.8rem;
              margin-bottom: 1rem !important;
            }

            .hero p {
              font-size: 1rem !important;
              margin-bottom: 1.8rem !important;
              padding: 0 5px;
            }

            .hero-btns .btn {
              max-width: 100%;
              padding: 10px 15px;
              font-size: 0.95rem;
            }
          }

          /* Tablet Screens */
          @media (min-width: 769px) and (max-width: 1024px) {
            .hero {
              padding-left: 30px;
              padding-right: 30px;
            }

            .hero h1 {
              font-size: 2.8rem;
            }

            .hero-content {
              max-width: 550px !important;
            }

            .hero p {
              font-size: 1.1rem !important;
            }

            .hero-shape {
              width: 40% !important;
            }
          }

          /* Large Screens */
          @media (min-width: 1025px) {
            .hero-content {
              max-width: 700px !important;
            }

            .hero h1 {
              font-size: 3.5rem;
            }

            .hero p {
              font-size: 1.25rem !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
