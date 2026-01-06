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
    },
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/lakki-joshi-5a5958388",
      title: "LinkedIn",
    },
    {
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/@luckcricket7",
      title: "YouTube",
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
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          <Link to="home" smooth={true} duration={500} className="footer-logo">
            Lakki Joshi
          </Link>

          <p className="footer-description">
            Full Stack Developer and UI/UX Designer who enjoys building clean
            and easy-to-use web experiences.
          </p>

          <div className="social-links-container">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="social-link"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>

          <div className="quick-links-container">
            {quickLinks.map((link, index) =>
              link.url ? (
                <a
                  key={index}
                  href={link.url}
                  target={link.label === "Resume" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
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
                  className="footer-link"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Lakki Joshi. All Rights Reserved.</p>
            <p>
              Built with React, Node.js, and <span className="heart">❤️</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        :root {
          --primary: #00bcd4;
          --secondary: #ff5722;
          --accent: #ffc107;
          --dark: #1e293b;
          --light: #f8fafc;
          --gray: #64748b;
          --transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-container {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.95),
            rgba(30, 41, 59, 0.9)
          );
          padding: 60px 0 30px;
          border-top: 1px solid rgba(0, 188, 212, 0.2);
          width: 100%;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-logo {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00bcd4, #ff5722, #ffc107);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
        }

        .footer-logo::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #00bcd4,
            #ff5722,
            transparent
          );
          transition: var(--transition);
        }

        .footer-logo:hover::after {
          left: 100%;
        }

        .footer-logo:hover {
          transform: translateY(-3px);
        }

        .footer-description {
          max-width: 600px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
          color: var(--gray);
          line-height: 1.6;
        }

        .social-links-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: linear-gradient(
            135deg,
            rgba(0, 188, 212, 0.2),
            rgba(255, 87, 34, 0.2)
          );
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light);
          font-size: 1.3rem;
          transition: var(--transition);
          border: 1px solid rgba(0, 188, 212, 0.2);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #00bcd4, #ff5722);
          border-radius: 12px;
          transform: scale(0);
          transition: var(--transition);
          z-index: -1;
        }

        .social-link:hover::before {
          transform: scale(1);
        }

        .social-link:hover {
          color: white;
          transform: translateY(-5px) rotate(10deg);
          border-color: transparent;
        }

        .quick-links-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .footer-link {
          color: var(--gray);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
          padding: 5px 0;
          position: relative;
          font-size: 1rem;
          cursor: pointer;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #00bcd4, #ff5722);
          transition: var(--transition);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }

        .footer-bottom {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 188, 212, 0.2);
          width: 100%;
          color: var(--gray);
          font-size: 0.9rem;
        }

        .footer-bottom p {
          margin: 8px 0;
        }

        .heart {
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 0 25px;
          }

          .footer-content {
            padding: 0 15px;
          }

          .footer-logo {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .footer-description {
            font-size: 1rem;
            margin-bottom: 25px;
            line-height: 1.5;
          }

          .social-links-container {
            gap: 15px;
            margin: 20px 0;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .quick-links-container {
            flex-direction: column;
            gap: 15px;
            margin: 20px 0;
            width: 100%;
            max-width: 300px;
          }

          .footer-link {
            font-size: 1.1rem;
            padding: 12px 20px;
            background: linear-gradient(
              135deg,
              rgba(30, 41, 59, 0.6),
              rgba(15, 23, 42, 0.7)
            );
            border-radius: 8px;
            border: 1px solid rgba(0, 188, 212, 0.2);
            width: 100%;
            text-align: center;
          }

          .footer-link::after {
            display: none;
          }

          .footer-link:hover {
            background: linear-gradient(
              135deg,
              rgba(0, 188, 212, 0.15),
              rgba(255, 87, 34, 0.15)
            );
            transform: translateY(-3px);
          }

          .footer-bottom {
            margin-top: 30px;
            padding-top: 20px;
            font-size: 0.85rem;
          }

          .scroll-top {
            width: 45px;
            height: 45px;
            bottom: 20px;
            right: 20px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 30px 0 20px;
          }

          .footer-content {
            padding: 0 10px;
          }

          .footer-logo {
            font-size: 1.8rem;
          }

          .footer-description {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }

          .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .quick-links-container {
            max-width: 280px;
          }

          .footer-link {
            font-size: 1rem;
            padding: 10px 15px;
          }

          .footer-bottom {
            font-size: 0.8rem;
          }


        @media (hover: none) and (pointer: coarse) {
          .social-link:active,
          .footer-link:active {
            transform: scale(0.95);
            transition: transform 0.2s ease;
          }

        .footer-link:focus,
        .social-link:focus,
        .scroll-top:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
