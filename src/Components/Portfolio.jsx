/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 * import image from "../images/design-desk.jpeg";
 * const imageAltText = "desktop with books and laptop";
 */
import image from "../images/white2.jpg";
const imageAltText = "white striped background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Statistical mechanics of dense hebbian networks",
    description:
      "Paper published on the Journal of Physics A: Statistical Physics and its application. It discusses how high order interactions impact Hopfield networks.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437123006313",
  },
  {
    title: "Training dense hebbian networks with no supervision",
    description:
    "Paper published on the Journal of Physics A: Statistical Physics and its application. Here we develop a framework that allows to learn with a dense hebbian network in the unsupervised setting.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437123006982",
  },
  {
    title: "My Google Scholar profile",
    description: "Check out my Google Scholar profile to see my publications.",
    url: "https://scholar.google.com/citations?user=hbCDbioAAAAJ&hl=en",
  },
  {
    title: "Explaining complex systems to a broad audience in italian",
    description: "Publication on the Italian online magazine Rivolta La Carta.",
    url: "https://www.rivoltalacarta.it/la-natura-complessa-degli-stormi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
