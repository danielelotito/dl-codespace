/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/DanieleLotito.jpeg";
const imageAltText = "Daniele Lotito profile of mails and LinkedIn";const Home = ({ name, title }) => (
  <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden" }}>
    <img className="background"
         src={image}
         alt=""
         style= {{
           position: "absolute",
           top: 0,
           left: "25%", // Adjusted to occupy the right 2/3 of the screen
           width: "75%", // Increased width to fill 2/3 of the screen from the left position
           height: "100%", // Full height to prevent cutting off the image
           objectFit: "contain",
           objectPosition: "left top" // Adjusted to align the image to the left top
      }}
    />
    <div style={{ 
         position: "absolute", 
         top: "20%", 
         left: "5%", 
         width: "20%", // Reduced width to maintain proportion and avoid overlapping
         textAlign: "left" 
      }}>
      <h1 style={{ margin: "0.5em 0" }}>{name}</h1>
      <h2 style={{ margin: "0.5em 0" }}>{title}</h2> 
    </div>
    <div style={{ 
         position: "absolute", 
         bottom: "5%", 
         left: "50%", 
         transform: "translateX(-50%)" 
      }}>
      <img src={arrowSvg} 
           style={{ height: "3rem", width: "3rem" }} 
           alt={imageAltText} 
      />
    </div>
  </section>
);


Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
