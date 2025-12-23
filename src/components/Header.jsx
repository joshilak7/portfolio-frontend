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

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav-container">
          <Link to="home" smooth={true} duration={500} className="logo">
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
        /* HEADER */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .header.scrolled {
          padding: 10px 0;
          background: rgba(30, 41, 59, 0.95);
        }

        /* NAV CONTAINER */
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        /* LOGO */
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .logo::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: var(--primary);
          transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo:hover::after {
          left: 0;
        }

        .logo:hover {
          color: var(--primary);
        }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          list-style: none;
          transition: all 0.5s ease;
        }

        .nav-links li {
          margin-left: 2rem;
          position: relative;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--light);
          font-weight: 500;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary);
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          transition: transform 0.4s ease, color 0.4s ease;
        }

        .hamburger:hover {
          color: var(--primary);
          transform: rotate(90deg);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            right: -100%;
            width: 80%;
            height: calc(100vh - 80px);
            background: rgba(30, 41, 59, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 50px;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            transition: right 0.5s ease-in-out;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links li {
            margin: 15px 0;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
