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
          cursor: pointer;
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
          font-size: 1rem;
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
          color: var(--light);
          padding: 8px;
          z-index: 1001;
        }

        .hamburger:hover {
          color: var(--primary);
          transform: rotate(90deg);
        }

        /* MOBILE RESPONSIVE STYLES */
        @media (max-width: 768px) {
          /* Header adjustments */
          .header {
            padding: 0;
          }

          .header.scrolled {
            padding: 0;
          }

          /* Container adjustments */
          .container {
            padding: 0 20px;
            width: 100%;
          }

          /* Nav container */
          .nav-container {
            padding: 15px 0;
            min-height: 70px;
          }

          /* Logo adjustments */
          .logo {
            font-size: 1.5rem;
            z-index: 1001;
          }

          /* Mobile menu styles */
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 80px 20px 40px;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            margin: 0;
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
            transition: all 0.3s ease;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .nav-links a:hover,
          .nav-links a.active {
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            transform: translateX(-5px);
          }

          .nav-links a::after {
            display: none;
          }

          /* Hamburger adjustments */
          .hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .hamburger i {
            font-size: 1.3rem;
          }

          /* Prevent body scroll when menu is open */
          body.menu-open {
            overflow: hidden;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .nav-container {
            padding: 12px 0;
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

        /* Large phones and small tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .nav-links a {
            font-size: 1.25rem;
            padding: 16px 24px;
            max-width: 320px;
          }

          .nav-links li {
            margin-bottom: 30px;
          }

          .logo {
            font-size: 1.6rem;
          }
        }

        /* Tablet landscape */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-links li {
            margin-left: 1.5rem;
          }

          .nav-links a {
            font-size: 0.95rem;
          }
        }

        /* Fix for iOS Safari */
        @supports (-webkit-touch-callout: none) {
          .nav-links {
            height: -webkit-fill-available;
          }
        }

        /* Smooth transitions */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default Header;
