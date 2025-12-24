import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Analytics } from "@vercel/analytics/react";

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
      url: "https://www.linkedin.com/in/lakki-joshi-5a5958388",
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
      className="footer-container"
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          className="footer-content"
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
            className="footer-logo"
          >
            Lakki Joshi
          </Link>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              fontSize: "1.1rem",
              color: "var(--gray)",
              lineHeight: "1.6",
            }}
            className="footer-description"
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
            className="social-links-container"
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
                className="social-link"
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
            className="quick-links-container"
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
                    fontSize: "1rem",
                  }}
                  className="footer-link"
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
                    fontSize: "1rem",
                  }}
                  className="footer-link"
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
            className="footer-bottom"
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
        /* Base hover effects */
        a {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        a:hover,
        .scroll-top:hover {
          color: var(--primary) !important;
          transform: translateY(-5px);
        }

        .footer-link:hover::after {
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
          background: var(--primary) !important;
          color: white !important;
          transform: translateY(-5px) rotate(10deg);
          border-color: var(--primary) !important;
        }

        .scroll-top.visible {
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* MOBILE RESPONSIVE STYLES */
        @media (max-width: 768px) {
          /* Footer container */
          .footer-container {
            padding: 40px 0 25px !important;
          }

          .container {
            padding: 0 20px !important;
          }

          /* Footer logo */
          .footer-logo {
            font-size: 2rem !important;
            margin-bottom: 15px !important;
          }

          /* Description */
          .footer-description {
            font-size: 1rem !important;
            padding: 0 15px;
            margin-bottom: 25px !important;
            line-height: 1.5;
          }

          /* Social links */
          .social-links-container {
            gap: 15px !important;
            margin: 20px 0 !important;
          }

          .social-link {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.2rem !important;
          }

          /* Quick links */
          .quick-links-container {
            flex-direction: column !important;
            gap: 15px !important;
            margin: 20px 0 !important;
            width: 100%;
            max-width: 300px;
          }

          .footer-link {
            font-size: 1.1rem !important;
            padding: 12px 20px !important;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            width: 100%;
            text-align: center;
          }

          .footer-link:hover {
            background: rgba(37, 99, 235, 0.1);
            transform: translateY(-3px);
          }

          .footer-link::after {
            display: none !important;
          }

          /* Footer bottom */
          .footer-bottom {
            margin-top: 30px !important;
            padding-top: 20px !important;
            font-size: 0.85rem !important;
          }

          .footer-bottom p {
            margin: 8px 0;
          }

          /* Scroll to top button */
          .scroll-top {
            width: 45px !important;
            height: 45px !important;
            bottom: 20px !important;
            right: 20px !important;
            font-size: 1.1rem !important;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .footer-container {
            padding: 30px 0 20px !important;
          }

          .footer-logo {
            font-size: 1.8rem !important;
          }

          .footer-description {
            font-size: 0.95rem !important;
            padding: 0 10px;
          }

          .social-link {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.1rem !important;
          }

          .quick-links-container {
            max-width: 280px;
          }

          .footer-link {
            font-size: 1rem !important;
            padding: 10px 15px !important;
          }

          .footer-bottom {
            font-size: 0.8rem !important;
            padding: 0 10px;
          }

          .scroll-top {
            width: 40px !important;
            height: 40px !important;
            bottom: 15px !important;
            right: 15px !important;
            font-size: 1rem !important;
          }
        }

        /* Large phones and small tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .footer-logo {
            font-size: 2.2rem !important;
          }

          .footer-description {
            font-size: 1.05rem !important;
            max-width: 500px;
          }

          .social-link {
            width: 48px !important;
            height: 48px !important;
          }

          .quick-links-container {
            max-width: 350px;
          }

          .footer-link {
            font-size: 1.15rem !important;
          }
        }

        /* Tablet landscape */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-container {
            padding: 50px 0 30px !important;
          }

          .footer-description {
            font-size: 1.05rem !important;
            max-width: 550px;
          }

          .quick-links-container {
            gap: 25px !important;
          }
        }

        /* Fix for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .social-link:active,
          .footer-link:active {
            transform: scale(0.95);
            transition: transform 0.2s ease;
          }

          .scroll-top:active {
            transform: scale(0.95);
          }
        }

        /* Accessibility improvements */
        .footer-link:focus,
        .social-link:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }

        /* Improve text readability on mobile */
        @media (max-width: 768px) {
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
