import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: "fab fa-github",
      url: "https://github.com/joshilak7",
      title: "GitHub",
      color: "#333",
    },
    {
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/in/joshilak7",
      title: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: "fab fa-youtube",
      url: "www.youtube.com/@luckcricket7",
      title: "YouTube",
      color: "#ff0000",
    },
  ];

  const quickLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
    { label: "Resume", url: "/resume.pdf" },
  ];

  return (
    <footer
      style={{
        background: "rgba(15, 23, 42, 0.9)",
        padding: "60px 0 30px",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            Lakki Joshi
          </Link>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              fontSize: "1.1rem",
              color: "var(--gray)",
            }}
          >
            Full Stack Developer & UI/UX Designer passionate about creating
            beautiful, functional web experiences that make a difference.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                style={{
                  width: "50px",
                  height: "50px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--light)",
                  fontSize: "1.3rem",
                  transition: "var(--transition)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textDecoration: "none",
                }}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              margin: "30px 0",
              flexWrap: "wrap",
            }}
          >
            {quickLinks.map((link, index) =>
              link.url ? (
                <a
                  key={index}
                  href={link.url}
                  target={link.label === "Resume" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--gray)",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "var(--transition)",
                    padding: "5px 0",
                    position: "relative",
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{
                    color: "var(--gray)",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "var(--transition)",
                    padding: "5px 0",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              width: "100%",
              color: "var(--gray)",
              fontSize: "0.9rem",
            }}
          >
            <p>&copy; {currentYear} Lakki Joshi. All Rights Reserved.</p>
            <p style={{ marginTop: "10px", opacity: 0.7 }}>
              Built with React, Node.js, and{" "}
              <span style={{ color: "var(--secondary)" }}>❤️</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          background: "var(--primary)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          cursor: "pointer",
          opacity: "0",
          visibility: "hidden",
          transition: "var(--transition)",
          zIndex: "999",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <style jsx="true">{`
        a {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        a:hover,
        .scroll-top:hover {
          color: var(--primary) !important;
          transform: translateY(-5px);
        }

        a:hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
        .social-link {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .social-link:hover {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: var(--primary) !important;
          color: white !important;
          transform: translateY(-5px) rotate(10deg);
          border-color: var(--primary) !important;
        }

        .scroll-top.visible {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
