/**
 * Footer component
 *
 * Displays avenues to contact you and links to social profiles.
 * Contact information is passed in from the App component.
 */
import React from "react";
import PropTypes from "prop-types";

// Social media icons
import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    secondaryColor,
    twitter,
    youTube,
  } = props;

  // Helper function to get active social links
  const getActiveSocialLinks = () => {
    const links = [];
    
    if (email) links.push({ 
      type: 'email',
      url: `mailto:${email}`,
      icon: envelopeIcon,
      label: 'Email'
    });
    
    if (linkedIn) links.push({ 
      type: 'linkedin',
      url: `https://www.linkedin.com/in/${linkedIn}`,
      icon: linkedInIcon,
      label: 'LinkedIn'
    });
    
    if (gitHub) links.push({ 
      type: 'github',
      url: `https://github.com/${gitHub}`,
      icon: gitHubIcon,
      label: 'GitHub'
    });
    
    if (instagram) links.push({ 
      type: 'instagram',
      url: `https://www.instagram.com/${instagram}`,
      icon: instagramIcon,
      label: 'Instagram'
    });
    
    if (devDotTo) links.push({ 
      type: 'devdotto',
      url: `https://dev.to/${devDotTo}`,
      icon: devDotToIcon,
      label: 'Dev.to'
    });
    
    if (medium) links.push({ 
      type: 'medium',
      url: `https://medium.com/@${medium}`,
      icon: mediumIcon,
      label: 'Medium'
    });
    
    if (twitter) links.push({ 
      type: 'twitter',
      url: `https://twitter.com/${twitter}`,
      icon: twitterIcon,
      label: 'Twitter'
    });
    
    if (youTube) links.push({ 
      type: 'youtube',
      url: `https://www.youtube.com/c/${youTube}`,
      icon: youTubeIcon,
      label: 'YouTube'
    });
    
    return links;
  };

  const activeLinks = getActiveSocialLinks();

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" style={{
      background: primaryColor,
      color: "white",
      padding: "4rem 0 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        opacity: 0.3,
      }}></div>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        position: "relative",
        zIndex: 2,
      }}>
        {/* Top section with contact information */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "3rem",
        }}>
          <h2 style={{
            fontSize: "2.2rem",
            marginBottom: "1rem",
            position: "relative",
            paddingBottom: "10px",
          }}>
            Get In Touch
            <div style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: secondaryColor,
              borderRadius: "2px",
            }}></div>
          </h2>
          
          <p style={{
            fontSize: "1.1rem",
            maxWidth: "600px",
            textAlign: "center",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}>
            Interested in collaborating on research or have questions about my work in statistical physics and AI? 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Social links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          {activeLinks.map((link) => (
            <a 
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              >
                <img 
                  src={link.icon} 
                  alt={link.label} 
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "brightness(0) invert(1)", // Makes the icon white
                  }} 
                />
              </div>
              <span style={{
                fontSize: "0.85rem",
                opacity: 0.9,
              }}>
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Bottom section with copyright */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <p style={{
            fontSize: "0.9rem",
            opacity: 0.8,
            margin: 0,
            textAlign: "center",
          }}>
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          
          <p style={{
            fontSize: "0.8rem",
            opacity: 0.6,
            marginTop: "0.5rem",
            textAlign: "center",
          }}>
            Theoretical Physicist & AI Researcher
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 3rem 0 1.5rem;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          div[style*="gap: 1.5rem"] {
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
  primaryColor: "#0D3B66",
  secondaryColor: "#FAF0CA",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;