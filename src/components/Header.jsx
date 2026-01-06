import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav-container">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="logo"
            onClick={closeMenu}
          >
            Lakki Joshi
          </Link>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </nav>
      </div>

      <style jsx="true">{`
        :root {
          --primary: #00bcd4;
          --secondary: #ff5722;
          --light: #f8fafc;
          --transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: linear-gradient(
            to bottom,
            rgba(30, 41, 59, 0.95),
            rgba(30, 41, 59, 0.85)
          );
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 188, 212, 0.1);
          transition: var(--transition);
        }

        .header.scrolled {
          padding: 10px 0;
          background: linear-gradient(
            to bottom,
            rgba(30, 41, 59, 0.98),
            rgba(30, 41, 59, 0.9)
          );
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00bcd4, #ff5722);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
        }

        .logo::after {
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

        .logo:hover::after {
          left: 0;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          margin-left: 2rem;
          position: relative;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--light);
          font-weight: 500;
          padding: 5px 0;
          position: relative;
          transition: var(--transition);
          cursor: pointer;
          font-size: 1rem;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #00bcd4, #ff5722);
          transition: var(--transition);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #00bcd4;
        }

        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #00bcd4, #ff5722);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: var(--transition);
          padding: 8px;
          z-index: 1001;
        }

        .hamburger:hover {
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .header {
            padding: 0;
          }

          .header.scrolled {
            padding: 0;
          }

          .nav-container {
            padding: 15px 20px;
            min-height: 70px;
          }

          .logo {
            font-size: 1.5rem;
            z-index: 1001;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: linear-gradient(
              135deg,
              rgba(30, 41, 59, 0.98),
              rgba(15, 23, 42, 0.95)
            );
            backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 80px 20px 40px;
            box-shadow: -5px 0 15px rgba(0, 188, 212, 0.3);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links li {
            margin: 0;
            width: 100%;
            text-align: center;
            margin-bottom: 25px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.5s forwards;
          }

          .nav-links li:nth-child(1) {
            animation-delay: 0.1s;
          }
          .nav-links li:nth-child(2) {
            animation-delay: 0.2s;
          }
          .nav-links li:nth-child(3) {
            animation-delay: 0.3s;
          }
          .nav-links li:nth-child(4) {
            animation-delay: 0.4s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-links a {
            display: block;
            padding: 15px 20px;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--light);
            border-radius: 8px;
            transition: var(--transition);
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .nav-links a:hover,
          .nav-links a.active {
            background: linear-gradient(
              135deg,
              rgba(0, 188, 212, 0.15),
              rgba(255, 87, 34, 0.15)
            );
            color: #00bcd4;
            transform: translateX(-5px);
          }

          .nav-links a::after {
            display: none;
          }

          .hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            background: linear-gradient(
              135deg,
              rgba(0, 188, 212, 0.2),
              rgba(255, 87, 34, 0.2)
            );
            border-radius: 8px;
            border: 1px solid rgba(0, 188, 212, 0.2);
          }

          .hamburger i {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 12px 15px;
            min-height: 60px;
          }

          .logo {
            font-size: 1.3rem;
          }

          .hamburger {
            width: 40px;
            height: 40px;
          }

          .hamburger i {
            font-size: 1.2rem;
          }

          .nav-links a {
            font-size: 1.1rem;
            padding: 12px 20px;
            max-width: 280px;
          }

          .nav-links li {
            margin-bottom: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-links li {
            margin-left: 1.5rem;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .nav-links {
            height: -webkit-fill-available;
          }
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default Header;
