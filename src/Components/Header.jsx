/**
 * Header component
 *
 * Top navigation bar for your site. Remains visible as the
 * user scrolls for easy access to any part of your page.
 */
import React, { useState, useEffect } from "react";

// Optional: import a logo if you have one
// import logo from "../images/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#footer" }
  ];

  // Change header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Optional: update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1000,
      transition: "all 0.3s ease",
      background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.75)",
      boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      backdropFilter: "blur(5px)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isScrolled ? "0.8rem 2rem" : "1.2rem 2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        transition: "all 0.3s ease",
      }}>
        {/* Logo/Name */}
        <div style={{
          fontWeight: "600",
          fontSize: "1.2rem",
          color: "#0D3B66",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          {/* Uncomment if you have a logo */}
          {/* <img src={logo} alt="Logo" style={{ height: "30px" }} /> */}
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>Daniele Lotito</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav style={{
          display: "flex",
          gap: "2rem",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }} className="desktop-nav">
          {navItems.map(item => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href.substring(1))}
              style={{
                textDecoration: "none",
                color: activeSection === item.href.substring(1) ? "#0D3B66" : "#666",
                fontWeight: activeSection === item.href.substring(1) ? "600" : "400",
                fontSize: "1rem",
                position: "relative",
                padding: "0.5rem 0",
                transition: "color 0.3s ease",
              }}
            >
              {item.name}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: activeSection === item.href.substring(1) ? "100%" : "0%",
                height: "2px",
                backgroundColor: "#0D3B66",
                transition: "width 0.3s ease",
              }}></div>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
            "@media (max-width: 768px)": {
              display: "block",
            },
          }}
          aria-label="Toggle navigation menu"
          className="mobile-menu-button"
        >
          <div style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#0D3B66",
            margin: "5px 0",
            transition: "all 0.3s ease",
            transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}></div>
          <div style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#0D3B66",
            margin: "5px 0",
            opacity: mobileMenuOpen ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}></div>
          <div style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#0D3B66",
            margin: "5px 0",
            transition: "all 0.3s ease",
            transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}></div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxHeight: mobileMenuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out",
        zIndex: 999,
      }} className="mobile-nav">
        <div style={{ padding: "1rem 2rem" }}>
          {navItems.map(item => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href.substring(1))}
              style={{
                display: "block",
                padding: "1rem 0",
                borderBottom: "1px solid #eee",
                color: activeSection === item.href.substring(1) ? "#0D3B66" : "#666",
                fontWeight: activeSection === item.href.substring(1) ? "600" : "400",
                textDecoration: "none",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex;
          }
          
          .mobile-menu-button {
            display: none;
          }
          
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;