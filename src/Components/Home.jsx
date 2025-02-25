/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useEffect, useState } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 */
import image from "../images/DanieleLotito.jpeg";
const imageAltText = "Daniele Lotito profile picture";

const Home = ({ name, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Animation sequence for elements to appear
  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-height" 
      style={{ 
        position: "relative", 
        overflow: "hidden", 
        height: '100vh',
        background: "linear-gradient(to right, #f8f8f8, #ffffff)"
      }}
    >
      {/* Background pattern */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          backgroundImage: "radial-gradient(#0D3B66 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          zIndex: 1
        }}
      ></div>
      
      {/* Profile image */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "65%",
          height: "90vh",
          zIndex: 2,
          overflow: "hidden",
          transition: "transform 1.2s ease-out",
          transform: isLoaded ? "translateX(0)" : "translateX(100px)",
          opacity: isLoaded ? 1 : 0
        }}
      >
        <img 
          src={image}
          alt={imageAltText}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            objectPosition: "bottom right"
          }}
        />
      </div>
      
      {/* Text content */}
      <div 
        style={{ 
          position: "absolute", 
          top: "25%", 
          left: "5%", 
          maxWidth: "500px",
          zIndex: 3,
          transition: "all 1s ease-out",
          transform: isLoaded ? "translateY(0)" : "translateY(30px)",
          opacity: isLoaded ? 1 : 0
        }}
      >
        <div 
          style={{ 
            padding: "20px",
            background: "rgba(255, 255, 255, 0.9)", 
            borderRadius: "8px",
            boxShadow: "0 10px 30px rgba(13, 59, 102, 0.1)"
          }}
        >
          <h1 
            style={{ 
              fontSize: "4.5rem", 
              marginBottom: "1rem",
              color: "#0D3B66",
              lineHeight: 1.1
            }}
          >
            {name}
          </h1>
          <h2 
            style={{ 
              fontSize: "1.8rem", 
              fontWeight: "400", 
              color: "#555",
              marginBottom: "1.5rem"
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
              color: "#666"
            }}
          >
            Exploring the intersection of statistical physics and artificial intelligence. 
            My research focuses on understanding the fundamental properties of neural networks 
            through the lens of statistical mechanics.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a 
              href="#about" 
              style={{
                display: "inline-block",
                background: "#0D3B66",
                color: "white",
                padding: "12px 25px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {e.target.style.background = "#1a4f82"}}
              onMouseLeave={(e) => {e.target.style.background = "#0D3B66"}}
            >
              Learn More
            </a>
            <a 
              href="#portfolio" 
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#0D3B66",
                padding: "12px 25px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1rem",
                border: "1px solid #0D3B66",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0D3B66";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#0D3B66";
              }}
            >
              View Research
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "30px", 
          left: "50%", 
          transform: "translateX(-50%)",
          zIndex: 4,
          transition: "opacity 0.5s ease-in, transform 0.5s ease-in",
          opacity: showArrow ? 1 : 0,
          animation: showArrow ? "bounce 2s infinite" : "none"
        }}
      >
        <a href="#about">
          <img 
            src={arrowSvg} 
            alt="Scroll down" 
            style={{ 
              height: "2.5rem", 
              width: "2.5rem",
              filter: "invert(26%) sepia(72%) saturate(1096%) hue-rotate(194deg) brightness(91%) contrast(97%)" // Changes to primary blue
            }} 
          />
        </a>
      </div>
      
      {/* Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        
        @media (max-width: 992px) {
          h1 {
            font-size: 3.5rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
          }
          section {
            height: auto !important;
            min-height: 100vh !important;
          }
          div[style*="right: 0"] {
            position: relative !important;
            width: 100% !important;
            height: 50vh !important;
            margin-top: 80px !important;
          }
          div[style*="top: 25%"] {
            position: relative !important;
            width: 90% !important;
            max-width: none !important;
            margin: 0 auto !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            padding: 3rem 0 !important;
          }
          div[style*="bottom: 30px"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;