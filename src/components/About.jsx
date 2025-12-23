import React, { useEffect, useRef } from "react";

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
    <section
      className="about"
      id="about"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container">
        <h2>About Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div
            ref={aboutTextRef}
            style={{
              opacity: "0",
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p>
              Hello! I'm{" "}
              <strong style={{ color: "var(--primary)" }}>Lakki Joshi</strong>,
              a passionate full-stack developer with over 1 year of experience
              creating digital solutions for businesses and individuals.
            </p>
            <p>
              I specialize in turning complex problems into simple, beautiful
              designs. My journey in web development started during my computer
              application degree, and I've been hooked ever since.
            </p>
            <p>
              I love learning new technologies and staying up-to-date with
              industry trends. When I'm not coding, you can find me hiking,
              reading tech blogs, or experimenting with new frameworks.
            </p>

            <h3
              style={{
                marginTop: "30px",
                marginBottom: "15px",
                color: "var(--light)",
              }}
            >
              Skills & Technologies
            </h3>
            <div
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
                    background: "rgba(37, 99, 235, 0.2)",
                    color: "var(--primary)",
                    padding: "8px 15px",
                    borderRadius: "30px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "var(--transition)",
                    cursor: "pointer",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={aboutImgRef}
            style={{
              opacity: "0",
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                background:
                  "linear-gradient(45deg, var(--primary), var(--secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="fas fa-user"
                  style={{ fontSize: "4rem", marginBottom: "20px" }}
                ></i>
                <div>Lakki Joshi</div>
                <div
                  style={{ fontSize: "1rem", opacity: 0.9, marginTop: "10px" }}
                >
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .skill-tag:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          background: rgba(37, 99, 235, 0.4);
        }

        .about-img::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          opacity: 0;
          transition: var(--transition);
          z-index: 1;
        }

        .about-img:hover::before {
          opacity: 0.2;
        }

        .about-img:hover div {
          transform: scale(1.05);
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-img {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
