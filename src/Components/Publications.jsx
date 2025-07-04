/**
 * Publications component
 *
 * Displays academic publications in a clean, organized format
 * with filtering capabilities and citation information.
 */

import React, { useState } from "react";

const Publications = () => {
  // Publications data
  const publications = [
    {
      title: "Dense Hebbian neural networks: A replica symmetric picture of unsupervised learning",
      authors: "E. Agliari et al.",
      journal: "Physica A: Statistical Mechanics and its Applications",
      volume: "627",
      year: "2023",
      pages: "129143",
      doi: "10.1016/j.physa.2023.129143",
      url: "https://doi.org/10.1016/j.physa.2023.129143",
      categories: ["Unsupervised Learning", "Statistical Physics", "Associative Networks", "Dense Networks"]
    },
    {
      title: "Dense Hebbian neural networks: A replica symmetric picture of supervised learning",
      authors: "E. Agliari et al.",
      journal: "Physica A: Statistical Mechanics and its Applications",
      volume: "626",
      year: "2023",
      pages: "129076",
      doi: "10.1016/j.physa.2023.129076",
      url: "https://doi.org/10.1016/j.physa.2023.129076",
      arxiv: "2211.14067",
      categories: ["Supervised Learning", "Statistical Physics", "Associative Networks", "Dense Networks"]
    },
    {
      title: "Inverse modeling of time-delayed interactions via the Dynamic Entropy formalism",
      authors: "E. Agliari et al.",
      journal: "Physical Review E",
      volume: "110.2",
      year: "2024",
      pages: "024301",
      doi: "10.1103/PhysRevE.110.024301",
      url: "https://doi.org/10.1103/PhysRevE.110.024301",
      categories: ["Maximum Entropy Methods", "Time-delayed Systems", "Statistical Physics", "Biological Systems"]
    },
    {
      title: "Learning in Associative Networks Through Pavlovian Dynamics",
      authors: "D. Lotito, M. Aquaro, and C. Marullo",
      journal: "Neural Computation",
      volume: "",
      year: "2024",
      pages: "1-33",
      doi: "10.1162/neco_a_01730",
      url: "https://doi.org/10.1162/neco_a_01730",
      categories: ["Associative Networks", "Pavlovian Dynamics", "Neural Computation"]
    },
    {
      title: "Neural Learning Rules from Associative Networks Theory",
      authors: "D. Lotito",
      journal: "Currently Under Review",
      volume: "",
      year: "2025",
      pages: "",
      doi: "",
      url: "",
      categories: ["Neural Learning", "Dynamical Systems", "Associative Networks", "Preprint"]
    }
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories for filter
  const allCategories = ["All"];
  publications.forEach(pub => {
    pub.categories.forEach(cat => {
      if (!allCategories.includes(cat)) {
        allCategories.push(cat);
      }
    });
  });
  
  // Sort categories alphabetically (keeping "All" at the beginning)
  allCategories.sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });

  // Filter publications based on active filter
  const filteredPublications = activeFilter === "All" 
    ? publications 
    : publications.filter(pub => pub.categories.includes(activeFilter));

  return (
    <section className="padding" id="publications">
      <div 
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        <h2 
          style={{ 
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#0D3B66", 
            marginBottom: "1rem",
            position: "relative"
          }}
        >
          Publications
          <div 
            style={{
              position: "absolute",
              width: "80px",
              height: "4px",
              backgroundColor: "#FAF0CA",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "2px"
            }}
          ></div>
        </h2>

        <p 
          style={{ 
            textAlign: "center", 
            maxWidth: "700px", 
            margin: "0 auto 3rem",
            color: "#666"
          }}
        >
          My research contributions in statistical physics applications to machine learning, 
          neural networks, and complex systems.
        </p>

        {/* Category filters */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            margin: "0 auto 2.5rem",
            maxWidth: "1000px"
          }}
        >
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                padding: "8px 16px",
                borderRadius: "30px",
                border: category === activeFilter 
                  ? "2px solid #0D3B66" 
                  : "1px solid #ddd",
                background: category === activeFilter 
                  ? "#0D3B66" 
                  : "white",
                color: category === activeFilter 
                  ? "white" 
                  : "#555",
                cursor: "pointer",
                fontWeight: category === activeFilter 
                  ? "600" 
                  : "400",
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publications list */}
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            marginBottom: "3rem"
          }}
        >
          {filteredPublications.map((publication, index) => (
            <div 
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                border: "1px solid #eee",
              }}
            >
              <div 
                style={{
                  padding: "25px",
                  borderBottom: publication.url ? "1px dashed #eee" : "none"
                }}
              >
                {/* Publication title */}
                <h3 
                  style={{ 
                    marginTop: 0,
                    marginBottom: "12px",
                    color: "#0D3B66",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    lineHeight: "1.4"
                  }}
                >
                  {publication.title}
                </h3>
                
                {/* Authors */}
                <p 
                  style={{ 
                    fontSize: "1rem",
                    color: "#444",
                    marginBottom: "8px",
                    fontWeight: "500"
                  }}
                >
                  {publication.authors}
                </p>
                
                {/* Journal info */}
                <p 
                  style={{ 
                    fontSize: "0.95rem",
                    color: "#666",
                    fontStyle: "italic",
                    marginBottom: "12px"
                  }}
                >
                  {publication.journal}
                  {publication.volume && `, ${publication.volume}`}
                  {publication.year && ` (${publication.year})`}
                  {publication.pages && `, pp. ${publication.pages}`}
                </p>
                
                {/* Categories */}
                <div 
                  style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: "8px",
                    marginTop: "15px" 
                  }}
                >
                  {publication.categories.map((category, i) => (
                    <span 
                      key={i}
                      style={{
                        backgroundColor: "rgba(13, 59, 102, 0.08)",
                        color: "#0D3B66",
                        padding: "4px 10px",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        fontWeight: "500"
                      }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links section */}
              {(publication.doi || publication.url || publication.arxiv) && (
                <div 
                  style={{
                    padding: "15px 25px",
                    background: "#f9f9f9",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px"
                  }}
                >
                  {publication.doi && (
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ fontWeight: "500", fontSize: "0.9rem", color: "#555" }}>DOI:</span>
                      <span style={{ fontSize: "0.9rem", color: "#777" }}>{publication.doi}</span>
                    </div>
                  )}
                  
                  {publication.arxiv && (
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ fontWeight: "500", fontSize: "0.9rem", color: "#555" }}>arXiv:</span>
                      <span style={{ fontSize: "0.9rem", color: "#777" }}>{publication.arxiv}</span>
                    </div>
                  )}
                  
                  {publication.url && (
                    <a 
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: "auto",
                        background: "#0D3B66",
                        color: "white",
                        textDecoration: "none",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#1a4f82";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "#0D3B66";
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Publication
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Citation guide */}
        <div 
          style={{
            background: "rgba(250, 240, 202, 0.3)",
            padding: "1.5rem 2rem",
            borderRadius: "8px",
            borderLeft: "4px solid #FAF0CA",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <h4 
            style={{
              margin: "0 0 1rem 0",
              color: "#0D3B66",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "1.1rem"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D3B66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Citation Information
          </h4>
          <p 
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.6",
              color: "#555",
              margin: 0
            }}
          >
            If you use any of the above research in your work, please cite the corresponding paper. 
            For any questions about my research or potential collaborations, feel free to contact me.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section.padding {
            padding: 3rem 0;
          }
          
          h2[style*="fontSize: 2.5rem"] {
            font-size: 2rem !important;
          }
          
          div[style*="flexDirection: column"] {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Publications;