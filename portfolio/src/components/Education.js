import React from "react";
import { education } from "../data/portfolio_data.js";

export default function Education(){
  return (
    <section className="section container" id="education">
      <p className="eyebrow">Education</p>
      <h2>Academic Foundation</h2>
      <div className="grid">
        {education.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.degree}</h3>
            <p className="subheading">{item.school}</p>
            <p className="muted">{item.result}</p>
            <p className="muted">{item.gpa}</p>
            <p className="muted">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
