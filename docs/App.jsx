/**
 * Application component
 *
 * Container for application-wide settings, theme, state, and structure.
 */

import React, { useState, useEffect, createContext } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import PhD from "./Components/PhD";
import "./styles.css";

// Create theme context for potential dark mode
export const ThemeContext = createContext();

/**
 * Site configuration
 * All site-wide settings and personal information should be updated here.
 */
const siteConfig = {
  // Personal information
  name: "Daniele Lotito",
  title: "Research Scientist @ IBM Research, PhD in AI",
  email: "daniele.lotito[at]ibm[d0t]com",
  gitHub: "danielelotito",
  linkedIn: "daniele-lotito",
  
  // Theme colors
  colors: {
    primary: "#0D3B66",
    secondary: "#FAF0CA",
    text: "#333333",
    background: "#FFFFFF",
    accent: "#F95738",
  },
  
  // Feature toggles
  features: {
    showSkills: false, // Set to false to hide the skills section
  },
  
  // SEO and metadata
  seo: {
    title: "Daniele Lotito - Theoretical Physicist & AI Researcher",
    description: "Personal portfolio of Daniele Lotito, PhD candidate in AI specializing in statistical physics and machine learning.",
    keywords: "theoretical physics, artificial intelligence, statistical physics, machine learning, PhD, researcher",
  }
};

const App = () => {
  // Theme state for potential dark mode
  const [theme, setTheme] = useState("light");
  // State to track page loading
  const [isLoading, setIsLoading] = useState(true);
  // State to track active section for navigation
  const [activeSection, setActiveSection] = useState("home");

  // Handle page loading
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "publications", "portfolio", "education", "phd", "footer"];
      const scrollPosition = window.scrollY + 100; // Offset for header
      
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle dark/light theme (functionality to be implemented later)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Loading screen
  if (isLoading) {
    return (
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: siteConfig.colors.background,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: `3px solid ${siteConfig.colors.primary}`,
            borderTopColor: "transparent",
            animation: "spin 1s linear infinite",
          }}></div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            color: siteConfig.colors.primary,
          }}>
            Loading...
          </div>
        </div>
        
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id="main" style={{ 
        backgroundColor: theme === "light" ? siteConfig.colors.background : "#121212",
        color: theme === "light" ? siteConfig.colors.text : "#f1f1f1",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}>
        {/* Set document metadata */}
        <Metadata seo={siteConfig.seo} />
        
        {/* Main site structure */}
        <Header activeSection={activeSection} />
        <Home name={siteConfig.name} title={siteConfig.title} />
        <About />
        <Portfolio />
        <Education />
        <PhD />
        <Footer 
          {...siteConfig} 
          primaryColor={siteConfig.colors.primary} 
          secondaryColor={siteConfig.colors.secondary} 
        />
        
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
};

/**
 * Component to update document head metadata
 */
const Metadata = ({ seo }) => {
  useEffect(() => {
    // Update document title
    document.title = seo.title;
    
    // Update meta tags
    const metaTags = [
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
    ];
    
    metaTags.forEach(meta => {
      let tag = document.querySelector(`meta[name="${meta.name}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = meta.name;
        document.head.appendChild(tag);
      }
      
      tag.content = meta.content;
    });
  }, [seo]);
  
  return null; // This component doesn't render anything
};

/**
 * Component for scroll-to-top button
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: siteConfig.colors.primary,
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s, visibility 0.3s",
        zIndex: 99,
      }}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

export default App;
