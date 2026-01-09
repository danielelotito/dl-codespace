/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Home background image
*/
// import arrowSvg from "../images/down-arrow.svg";
// import image from "../images/DanieleLotito.jpeg";
const image = new URL("../images/DanieleLotito.jpeg", import.meta.url )
const arrowSvg = new URL("../images/down-arrow.svg", import.meta.url )
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
        background: "linear-gradient(to right, #f8f8f8, #ffffff)",
        position: "relative"
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
      
      <div className="home-container">
        <div className="home-content">
          {/* Text content */}
          <div 
            className="text-content"
            style={{ 
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
              <h1 style={{ 
                fontSize: "4.5rem", 
                marginBottom: "1rem",
                color: "#0D3B66",
                lineHeight: 1.1
              }}>
                {name}
              </h1>
              <h2 style={{ 
                fontSize: "1.8rem", 
                fontWeight: "400", 
                color: "#555",
                marginBottom: "1.5rem"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
                color: "#666"
              }}>
                Exploring the intersection of statistical physics and artificial intelligence. 
                My research focuses on understanding the fundamental properties of neural networks 
                through the lens of statistical mechanics.
              </p>
              <div className="button-container">
                <a 
                  href="#about" 
                  className="primary-button"
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
                  className="secondary-button"
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

          {/* Profile image */}
          <div
            className="image-content"
            style={{
              zIndex: 2,
              transition: "transform 1.2s ease-out",
              transform: isLoaded ? "translateX(0)" : "translateX(100px)",
              opacity: isLoaded ? 1 : 0
            }}
          >
            <img 
              src={image}
              alt={imageAltText}
              className="profile-image"
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="scroll-indicator"
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
      </div>
      
      {/* Animations and Responsive Styles */}
      <style>{`
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

        /* Main container for layout */
        .home-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding: 80px 0 20px 0;
          box-sizing: border-box;
        }
        
        /* Content wrapper for the flex layout */
        .home-content {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
        
        /* Text content styling */
        .text-content {
          flex: 0 0 45%;
          max-width: 500px;
          padding: 0 20px 0 40px;
          margin-right: auto;
        }
        
        /* Image container styling */
        .image-content {
          flex: 0 0 55%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 90vh;
          max-height: 700px;
          overflow: hidden;
          padding-right: 20px;
        }
        
        /* Profile image styling */
        .profile-image {
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom right;
        }
        
        /* Button container styling */
        .button-container {
          display: flex;
          gap: 15px;
        }
        
        /* Tablet styles */
        @media (max-width: 992px) {
          .text-content {
            padding: 0 20px;
          }
          
          h1 {
            font-size: 3.5rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          .image-content {
            height: 80vh;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .home-container {
            padding-top: 70px;
            padding-bottom: 0;
            justify-content: flex-start;
          }
          
          .home-content {
            flex-direction: column;
            height: auto;
          }
          
          .text-content {
            flex: 0 0 auto;
            width: 90%;
            max-width: 500px;
            padding: 0;
            margin: 0 auto;
            order: 2;
            text-align: center;
          }
          
          .image-content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            max-height: none;
            padding: 0;
            order: 1;
            margin-bottom: 20px;
            justify-content: center;
          }
          
          .profile-image {
            width: auto;
            height: auto;
            max-height: 45vh;
            max-width: 90%;
            object-position: center;
          }
          
          h1 {
            font-size: 2.8rem !important;
          }
          
          h2 {
            font-size: 1.4rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
          
          .button-container {
            justify-content: center;
          }
          
          .scroll-indicator {
            display: none !important;
          }
        }
        
        /* Small mobile styles */
        @media (max-width: 480px) {
          .home-container {
            padding-top: 60px;
          }
          
          .profile-image {
            max-height: 35vh;
          }
          
          h1 {
            font-size: 2.4rem !important;
          }
          
          h2 {
            font-size: 1.2rem !important;
          }
          
          .button-container {
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }
          
          .primary-button, .secondary-button {
            width: 100%;
            text-align: center;
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