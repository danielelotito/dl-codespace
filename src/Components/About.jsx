/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
import image from "../images/motion-background.jpg";
const imageAltText = "purple and blue abstract background";
 */

import image from "../images/background-graph-skyblue-whiteatthecenter.jpg";
const imageAltText = "Graph with sky blue background and white at the center";
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a PhD candidate in AI at University of Pisa. I am specialized in the contribution of statistical physics and statistical learning theory to machine learning. I apply the theoretical results to the analysis of the generalization properties of deep feed-forward neural networks. I am also interested in the application of high dimensional statistics to the analysis of the dynamics of complex systems such as biological systems and the stock market. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "Pytorch",
  "Tensorflow",
  "Scikit-learn",
  "R",
  "Git",
  "LaTeX",
  "Julia",
  "Feed-forward neural networks",
  "Statistical physics",
  "Statistical learning theory",
  "Attention based models",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Affiliated with the Italian Advanced Mathematics Institute (INDAM) and the Italian National Institute for Nuclear Physics (INFN).";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
