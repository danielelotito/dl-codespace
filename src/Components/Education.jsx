import React from "react";


const Education = () => {
  return (
    <section className="padding edu" id="education">
      <div className="container wider">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Education</h2>
          </div>
        </div>
        <div className="row centered-row">
          <div className="col-12 col-md-12 project-item">
            <h3 className="project-title">University of Pisa</h3>
            <p className="project-description">
              National PhD in Artificial Intelligence, 2021-2024
            </p>
          </div>
          <div className="col-12 col-md-12 project-item">
            <h3 className="project-title">École normale supérieure</h3>
            <p className="project-description">
              Visiting period. Thesis research project at the Institut Curie, 2021
            </p>
          </div>
          <div className="col-12 col-md-12 project-item">
            <h3 className="project-title">University of Salento</h3>
            <p className="project-description">
              Master&apos;s degree in Theoretical Physics, 110/110 cum Laude, 2019-2021
            </p>
          </div>
          <div className="col-12 col-md-12 project-item">
            <h3 className="project-title">University of Salento</h3>
            <p className="project-description">
              Bachelor&apos;s degree in Physics, 110/110 cum Laude, 2016-2019
            </p>
          </div>
          <div className="col-12 col-md-12 project-item">
            <h3 className="project-title">{'Liceo Scientifico "R. Nuzzi", Andria(BT)'}</h3>
            <p className="project-description">High school diploma, 100/100 cum Laude, 2011-2016</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
