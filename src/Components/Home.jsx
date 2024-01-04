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
const imageAltText = "Daniele Lotito profile of mails and LinkedIn";

const Home = ({ name, title }) => (
  <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden", height: '100vh' }}>
    <img className="background"
         src={image}
         alt=""
         style= {{
           position: "absolute",
           left: 0, // Align to the right
           bottom: 0, // Align to the bottom
           maxHeight: '100vh', // Max height is the full viewport height
           maxWidth: '100%', // Max width is the full width of its container
           objectFit: "contain", // Maintain aspect ratio
           objectPosition: "bottom right" // Align the image to the bottom right
      }}
    />
    <div style={{ position: "absolute", top: "20%", left: "5%", width: "30%", textAlign: "left" }}>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
    <div style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
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
