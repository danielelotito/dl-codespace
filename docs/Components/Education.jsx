import React, { useState } from "react";
import "../styles.css";

const Education = () => {
  // Education items with expanded information
  const educationItems = [
    {
      institution: "University of Pisa",
      degree: "National PhD in Artificial Intelligence",
      period: "2021-2025",
      highlights: "Excellent with Honors",
      description: "Specialized in mathematical physics applications to machine learning. My fellowship was co-founded by the Italian Advanced Mathematics Institute (INDAM) and the Italian National Research Council (CNR).",
      skills: ["Deep Learning", "Statistical Learning Theory", "Neural Networks", "Mathematical Physics"]
    },
    {
      institution: "École normale supérieure",
      degree: "Visiting Research Scholar",
      period: "2021",
      highlights: "Research Visiting Period",
      description: "Conducted thesis research at the Institut Curie, focusing on applications of statistical physics to biological systems.",
      skills: ["Statistichal Mechanics of self-propelled particles", "Biological Systems Modeling", "Inverse Probems", "Maximum entropy methods"]
    },
    {
      institution: "University of Salento",
      degree: "Master's degree in Theoretical Physics",
      period: "2019-2021",
      highlights: "110/110 cum Laude",
      description: "Focused on theoretical physics with applications to complex systems and statistical mechanics.",
      skills: ["Complex Systems", "Scientific Computing", "Statistical Mechanics", "Theoretical Physics"]
    },
    {
      institution: "University of Salento",
      degree: "Bachelor's degree in Physics",
      period: "2016-2019",
      highlights: "110/110 cum Laude",
      description: "Established strong foundations in physics, mathematics, and computational methods.",
      skills: [ "Physics", "Scientific Computing", "Mathematical Methods"]
    },
    {
      institution: "Liceo Scientifico \"R. Nuzzi\", Andria(BT)",
      degree: "High school diploma",
      period: "2011-2016",
      highlights: "100/100 cum Laude",
      description: "Scientific high school with focus on mathematics, physics, and natural sciences.",
      skills: ["Scientific Foundation", "Critical Thinking", "Problem Solving"]
    }
  ];

  // State to track expanded education item
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="padding" id="education">
      <div 
        style={{
          backgroundColor: "#f8f8f8",
          width: "90%",
          maxWidth: "1000px",
          padding: "3rem",
          margin: "3rem auto",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(13, 59, 102, 0.1)",
          transition: "all 0.3s ease"
        }}
      >
        <h2 
          style={{ 
            textAlign: "center", 
            marginBottom: "3rem",
            color: "#0D3B66",
            position: "relative",
            paddingBottom: "15px"
          }}
        >
          Academic Journey
          <div 
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "3px",
              background: "#FAF0CA",
              borderRadius: "2px"
            }}
          ></div>
        </h2>
        
        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="education-item"
              style={{
                borderLeft: "3px solid #0D3B66",
                paddingLeft: "2rem",
                marginBottom: "2.5rem",
                position: "relative",
                paddingBottom: "1rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: expandedIndex === index ? "translateX(10px)" : "none",
              }}
              onClick={() => toggleExpand(index)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleExpand(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div 
                style={{
                  position: "absolute",
                  left: "-12px",
                  top: "0",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: expandedIndex === index ? "#FAF0CA" : "#0D3B66",
                  border: "3px solid #0D3B66",
                  transition: "all 0.3s ease",
                  zIndex: 2
                }}
              ></div>
              
              <div 
                style={{
                  backgroundColor: expandedIndex === index ? "rgba(250, 240, 202, 0.3)" : "transparent",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: expandedIndex === index ? "0 4px 15px rgba(0, 0, 0, 0.1)" : "none"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: "0 0 0.5rem 0", color: "#0D3B66" }}>{item.institution}</h3>
                  <span 
                    style={{ 
                      backgroundColor: "#0D3B66", 
                      color: "white", 
                      padding: "0.2rem 0.7rem", 
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "bold" 
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                
                <p style={{ 
                  margin: "0 0 0.5rem 0", 
                  fontWeight: "500", 
                  fontSize: "1.1rem", 
                  color: "#333",
                  borderBottom: "1px dashed #ddd",
                  paddingBottom: "0.7rem"
                }}>
                  {item.degree}
                  <span style={{ 
                    marginLeft: "1rem", 
                    fontWeight: "600", 
                    color: "#0D3B66"
                  }}>
                    {item.highlights}
                  </span>
                </p>
                
                {expandedIndex === index && (
                  <div 
                    style={{
                      marginTop: "1rem",
                      animation: "fadeIn 0.5s ease-in-out"
                    }}
                  >
                    <p style={{ 
                      color: "#555", 
                      lineHeight: "1.6",
                      marginBottom: "1rem" 
                    }}>
                      {item.description}
                    </p>
                    
                    <div>
                      <p style={{ 
                        fontWeight: "600", 
                        margin: "0.5rem 0", 
                        color: "#0D3B66",
                        fontSize: "0.9rem"
                      }}>
                        SKILLS & FOCUS:
                      </p>
                      <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: "0.5rem",
                        marginTop: "0.5rem" 
                      }}>
                        {item.skills.map((skill, i) => (
                          <span 
                            key={i}
                            style={{
                              backgroundColor: "rgba(13, 59, 102, 0.1)",
                              color: "#0D3B66",
                              padding: "0.3rem 0.8rem",
                              borderRadius: "20px",
                              fontSize: "0.8rem",
                              fontWeight: "500",
                              border: "1px solid rgba(13, 59, 102, 0.2)"
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div 
                  style={{ 
                    textAlign: "center", 
                    marginTop: "0.8rem",
                    color: "#0D3B66",
                    fontSize: "0.8rem",
                    fontWeight: "500"
                  }}
                >
                  {expandedIndex === index ? "Click to collapse" : "Click to expand"}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @media (max-width: 768px) {
            .education-item {
              padding-left: 1.5rem !important;
            }
            
            h3 {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Education;