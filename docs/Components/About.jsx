/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 */
const image = new URL("../images/background-graph-skyblue-whiteatthecenter.jpg", import.meta.url)
const imageAltText = "Graph with sky blue background and white at the center";

/**
 * Description that expands on your title on the Home component.
 */
const description =
  "I'm a Research Scientist at IBM Research Europe, I hold a PhD in AI from the University of Pisa.\n\nI am specialized in Machine Learning in particular.\n\nI am also interested in the application of statistical learning theory to high dimensional regimes and complex systems such as agentic systems, biological networks and economic networks. \n\n My work lies at the intersection of theoretical physics, statistics, and machine learning, with hands-on experience in large machine learning models.";

/**
 * List of skills or technologies you work on or are passionate about
 */
const skillsList = [
  // {
  //   category: "Programming Languages",
  //   skills: ["Python", "LaTeX", "Julia",]
  // },
  {
    category: "Research Areas",
    skills: [ "High Dimensional Statistics", "Statistical Learning Theory", "Low Sample Size Statistics",  "Sampling algorithms", "Auto ML",  "AI for Scientific Discovery", "Feed-forward neural networks", "Statistical mechanics", "Maximum Entropy Methods", "Attention-based models", "Data Visualization"]
  },
  {
    category: "Python libraries for AI",
    skills: ["Python Standard Library", "Pytorch", "Scikit-learn", "Autogluon", "Pandas", "Langchain", "Numpy", "ado-core (IBM)", "hydra"]
  },
  {
    category: "Software Ecosystem",
    skills: ["Git", "uv",  "Ollama", "OpenML", "Hugging Face", "Many other AI tools"]
  },
];

/**
 * Additional information about what you are passionate about,
 * how you best work, or even a quote.
 */
const detailOrQuote =
  "Currently affiliated with IBM Research Europe. Formerly affiliated with University of Pisa, the Italian Advanced Mathematics Institute (INDAM) and the Italian National Institute for Nuclear Physics (INFN).";

const About = ({ showSkills = true }) => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          margin: "3rem auto",
        }}>
          {/* Header section */}
          <div style={{
            background: "linear-gradient(135deg, #0D3B66 0%, #1a4f82 100%)",
            padding: "2.5rem 3rem",
            color: "white",
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.05,
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "15px 15px",
            }}></div>
            
            <h2 style={{
              fontSize: "2.5rem",
              margin: 0,
              position: "relative"
            }}>About Myself</h2>
            
            <p style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              lineHeight: 1.6,
              maxWidth: "800px",
              position: "relative"
            }}>
              {description}
            </p>
          </div>
          
          {/* Skills section */}
          <div style={{
            padding: "3rem",
          }}>
            {showSkills && (
              <>
                <h3 style={{
                  color: "#0D3B66",
                  fontSize: "1.5rem",
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  Skills & Expertise
                  <div style={{
                    height: "3px",
                    background: "#FAF0CA",
                    flex: 1,
                    borderRadius: "2px",
                    marginLeft: "10px"
                  }}></div>
                </h3>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                  marginBottom: "2.5rem"
                }}>
                  {skillsList.map((skillGroup, groupIndex) => (
                    <div 
                      key={groupIndex}
                      style={{
                        background: "#f8f8f8",
                        borderRadius: "8px",
                        padding: "1.5rem",
                        border: "1px solid #eee"
                      }}
                    >
                      <h4 style={{
                        color: "#0D3B66",
                        marginTop: 0,
                        marginBottom: "1rem",
                        fontSize: "1.1rem"
                      }}>
                        {skillGroup.category}
                      </h4>
                      
                      <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px"
                      }}>
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            style={{
                              background: "white",
                              color: "#0D3B66",
                              padding: "6px 14px",
                              borderRadius: "30px",
                              fontSize: "0.9rem",
                              border: "1px solid rgba(13, 59, 102, 0.2)",
                              display: "inline-flex",
                              alignItems: "center"
                            }}
                          >
                            <span style={{
                              display: "inline-block",
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "#0D3B66",
                              marginRight: "8px"
                            }}></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* Affiliations section */}
            <div style={{
              background: "rgba(250, 240, 202, 0.3)",
              padding: "1.5rem 2rem",
              borderRadius: "8px",
              borderLeft: "4px solid #FAF0CA",
              marginTop: showSkills ? "2rem" : 0
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "0.5rem"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{fill: "#0D3B66"}}>
                  <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12,5.16-1.26,9-6.45,9-12V5L12,1z M19,11c0,4.52-2.98,8.69-7,9.93 C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M7.75,13L10,17l2-3l2,3l2.25-4L13,9.87L7.75,13z" />
                </svg>
                <h4 style={{
                  margin: 0,
                  color: "#0D3B66",
                  fontSize: "1.2rem",
                  fontWeight: "500"
                }}>
                  Academic Affiliations
                </h4>
              </div>
              
              <p style={{
                margin: "0.5rem 0 0",
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.6,
                paddingLeft: "39px"
              }}>
                {detailOrQuote}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          section.padding {
            padding: 3rem 0;
          }
          
          div[style*="padding: 2.5rem 3rem"] {
            padding: 2rem 1.5rem !important;
          }
          
          div[style*="padding: 3rem"] {
            padding: 2rem 1.5rem !important;
          }
          
          h2[style*="fontSize: 2.5rem"] {
            font-size: 2rem !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
