import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutImgRef = useRef(null);

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

    if (aboutTextRef.current) observer.observe(aboutTextRef.current);
    if (aboutImgRef.current) observer.observe(aboutImgRef.current);

    return () => {
      if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
      if (aboutImgRef.current) observer.unobserve(aboutImgRef.current);
    };
  }, []);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST APIs",
    "Adobe XD",
    "UI/UX Design",
    "Responsive Design",
    "MERN Stack",
    "SQL",
    "TypeScript",
  ];
  return (
    <>
      <Helmet>
        <title>About Lakki Joshi | MERN Stack Developer</title>
        <meta
          name="google-site-verification"
          content="4kWfLWrBSbLrHZIEiVofjq-CcEvTNMLC1pprWIKbU3g"
        />
        <meta
          name="description"
          content="Learn more about Lakki Joshi, a MERN Stack Full Stack Developer."
        />
        <link rel="canonical" href="https://lakkijoshi.vercel.app/about" />
      </Helmet>
      <section
        className="about"
        id="about"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="container">
          <h2>About Me</h2>
          <div
            className="about-content"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div
              ref={aboutTextRef}
              className="about-text"
              style={{
                opacity: "0",
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p>
                Hi, I'm{" "}
                <strong
                  style={{
                    background: "linear-gradient(135deg, #00bcd4, #ff5722)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Lakki Joshi
                </strong>
                . I'm a full-stack web developer with around 1 year of hands-on
                experience. I enjoy building simple and useful web applications
                for real users.
              </p>

              <p>
                I mostly work with HTML, CSS, JavaScript, and backend
                technologies like Node.js and MongoDB. I like solving problems
                step by step and keeping my code clean and easy to understand.
              </p>

              <p>
                I'm always trying to improve my skills and learn new things.
                Apart from coding, I spend time reading tech blogs and
                experimenting with small projects.
              </p>

              <h3
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  background: "linear-gradient(135deg, #00bcd4, #ff5722)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skills & Technologies
              </h3>
              <div
                className="skills-container"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(255, 87, 34, 0.2))",
                      color: "#00bcd4",
                      padding: "8px 15px",
                      borderRadius: "30px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={aboutImgRef}
              className="about-img"
              style={{
                opacity: "0",
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 188, 212, 0.2)",
                position: "relative",
              }}
            >
              <div
                className="profile-image"
                style={{
                  width: "100%",
                  height: "400px",
                  background: "linear-gradient(45deg, #00bcd4, #ff5722)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-user"
                    style={{
                      fontSize: "4rem",
                      marginBottom: "20px",
                      filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                    }}
                  ></i>
                  <div style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                    Lakki Joshi
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      opacity: 0.9,
                      marginTop: "10px",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .skill-tag::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .skill-tag:hover::before {
            left: 100%;
          }

          .skill-tag:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 188, 212, 0.3);
            background: linear-gradient(
              135deg,
              rgba(0, 188, 212, 0.3),
              rgba(255, 87, 34, 0.3)
            );
          }

          .about-img::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #00bcd4, #ff5722);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: 1;
          }

          .about-img:hover::before {
            opacity: 0.2;
          }

          .about-img:hover .profile-image {
            transform: scale(1.05);
          }

          @media (max-width: 1200px) {
            .about-content {
              gap: 40px !important;
            }

            .profile-image {
              height: 350px !important;
            }
          }

          @media (max-width: 992px) {
            .about-content {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            .about-text {
              order: 2;
            }

            .about-img {
              order: 1;
              max-width: 500px;
              margin: 0 auto;
            }

            .profile-image {
              height: 350px !important;
            }
          }

          @media (max-width: 768px) {
            .about-content {
              gap: 30px !important;
            }

            h2 {
              font-size: 2rem !important;
            }

            .about-text p {
              font-size: 1rem !important;
              line-height: 1.6;
              margin-bottom: 15px;
            }

            .profile-image {
              height: 300px !important;
            }

            .profile-image div {
              font-size: 1.3rem !important;
            }

            .profile-image .fa-user {
              font-size: 3.5rem !important;
            }
          }

          @media (max-width: 576px) {
            .about-content {
              gap: 25px !important;
            }

            h2 {
              font-size: 1.8rem !important;
              text-align: center;
              margin-bottom: 20px;
            }

            .about-text p {
              font-size: 0.95rem !important;
              text-align: justify;
            }

            h3 {
              font-size: 1.4rem !important;
              text-align: center;
            }

            .skills-container {
              justify-content: center;
              gap: 8px !important;
            }

            .skill-tag {
              padding: 6px 12px !important;
              font-size: 0.85rem !important;
            }

            .profile-image {
              height: 250px !important;
            }

            .profile-image div {
              font-size: 1.2rem !important;
            }

            .profile-image .fa-user {
              font-size: 3rem !important;
              margin-bottom: 15px !important;
            }

            .profile-image div div {
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 400px) {
            .about-text p {
              font-size: 0.9rem !important;
            }

            .skill-tag {
              padding: 5px 10px !important;
              font-size: 0.8rem !important;
            }

            .profile-image {
              height: 220px !important;
            }

            .profile-image div {
              font-size: 1.1rem !important;
            }

            .profile-image .fa-user {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 320px) {
            .skills-container {
              gap: 5px !important;
            }

            .skill-tag {
              padding: 4px 8px !important;
              font-size: 0.75rem !important;
            }

            .profile-image {
              height: 200px !important;
            }
          }

          @media (max-height: 500px) and (orientation: landscape) {
            .about-content {
              grid-template-columns: 1fr 1fr !important;
              gap: 20px !important;
            }

            .profile-image {
              height: 250px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
            .about-content {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            .profile-image {
              height: 350px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
            .about-content {
              grid-template-columns: 1fr 1fr !important;
              gap: 30px !important;
            }

            .profile-image {
              height: 300px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
