/* eslint-disable react/no-unknown-property */
/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 */

import React, { useState } from "react";


/**
 * Project list
 *
 * An array of objects that will be used to display project links
 */
const projectList = [
  {
    title: "Neural learning rules from associative networks theory",
    description:
      "Paper published on Neurocomputing. It shows how to derive neural learning rules from the statistical mechanics of associative networks.",
    url: "https://dx.doi.org/10.1016/j.neucom.2025.129865",
    tags: ["Neural Learning", "Associative Networks", "Research Paper"],
  },
  {
    title: "Learning in Associative Networks Through Pavlovian Dynamics",
    description:
      "Paper published on Neural Computation. It connects Hebbian and Pavlovian learning in associative networks.",
    url: "https://dx.doi.org/10.1162/neco_a_01730",
    tags: ["Pavlovian Learning", "Associative Networks", "Research Paper"],
  },
  {
    title: "Inverse modeling of time-delayed interactions via the dynamic-entropy formalism",
    description:
      "Paper published on Physical Review E. It introduces a method for inverse modeling of systems with time-delayed interactions.",
    url: "https://dx.doi.org/10.1103/physreve.110.024301",
    tags: ["Inverse Modeling", "Time-Delayed Interactions", "Research Paper"],
  },
  {
    title: "Dense Hebbian neural networks: A replica symmetric picture of supervised learning",
    description:
      "Paper published on Physica A. It provides a replica symmetric picture of supervised learning in dense Hebbian neural networks.",
    url: "https://dx.doi.org/10.1016/j.physa.2023.129076",
    tags: ["Supervised Learning", "Hebbian Networks", "Research Paper"],
  },
  {
    title: "Dense Hebbian neural networks: A replica symmetric picture of unsupervised learning",
    description:
      "Paper published on Physica A. It provides a replica symmetric picture of unsupervised learning in dense Hebbian neural networks.",
    url: "https://dx.doi.org/10.1016/j.physa.2023.129143",
    tags: ["Unsupervised Learning", "Hebbian Networks", "Research Paper"],
  },
  {
    title: "Statistical mechanics of dense hebbian networks",
    description:
      "Paper published on the Journal of Physics A: Statistical Physics and its application. It discusses how high order interactions impact Hopfield networks.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437123006313",
    tags: ["Statistical Physics", "Hopfield Networks", "Research Paper"]
  },
  {
    title: "Training dense hebbian networks with no supervision",
    description:
    "Paper published on the Journal of Physics A: Statistical Physics and its application. Here we develop a framework that allows to learn with a dense hebbian network in the unsupervised setting.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437123006982",
    tags: ["Unsupervised Learning", "Hebbian Networks", "Research Paper"]
  },
  {
    title: "My Google Scholar profile",
    description: "Check out my Google Scholar profile to see my publications.",
    url: "https://scholar.google.com/citations?user=hbCDbioAAAAJ&hl=en",
    tags: ["Academic Profile", "Publications", "Research Impact"]
  },
  {
    title: "Explaining complex systems to a broad audience in italian",
    description: "Publication on the Italian online magazine Rivolta La Carta.",
    url: "https://www.rivoltalacarta.it/la-natura-complessa-degli-stormi",
    tags: ["Science Communication", "Italian", "Complex Systems"]
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="padding" id="portfolio">
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <h2 style={{ 
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#0D3B66",
          marginBottom: "1rem",
          position: "relative"
        }}>
          Research Portfolio
          <div style={{
            position: "absolute",
            width: "80px",
            height: "4px",
            backgroundColor: "#FAF0CA",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "2px"
          }}></div>
        </h2>
        
        <p style={{ 
          textAlign: "center", 
          maxWidth: "700px", 
          margin: "0 auto 3rem",
          color: "#666"
        }}>
          A collection of my published research papers and academic contributions in the fields of 
          statistical physics, machine learning, and complex systems.
        </p>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}>
          {projectList.map((project, index) => (
            <div 
              key={project.title}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: hoveredIndex === index 
                  ? "0 10px 30px rgba(13, 59, 102, 0.2)" 
                  : "0 5px 15px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform: hoveredIndex === index ? "translateY(-10px)" : "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: "1px solid #eee"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ 
                  marginTop: 0,
                  marginBottom: "15px",
                  color: "#0D3B66",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  lineHeight: "1.3"
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#555",
                  flex: 1,
                  marginBottom: "20px"
                }}>
                  {project.description}
                </p>
                
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: "8px",
                  marginBottom: "20px" 
                }}>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      style={{
                        backgroundColor: "rgba(13, 59, 102, 0.08)",
                        color: "#0D3B66",
                        padding: "4px 10px",
                        borderRadius: "15px",
                        fontSize: "0.75rem",
                        fontWeight: "500"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#0D3B66",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                    marginTop: "auto"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#1a4f82";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#0D3B66";
                  }}
                >
                  View Publication
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 3rem 0;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;