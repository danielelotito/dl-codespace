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
  <section id="home" className="min-height" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
    <div style={{ flex: "1", padding: "2rem" }}>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
    <img className="background"
         src={image}
         alt=""
         style={{ flex: "1", width: "100%", objectFit: "cover", objectPosition: "right", transform: "scale(1)" }} 
    />
    <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
    </div>
  </section>
)
Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
