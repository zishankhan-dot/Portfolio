import React from "react";
import { education } from "../data/portfolio_data.js";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-inner">
        <p className="section-eyebrow">Academic</p>
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {education.map((item, i) => (
            <div className="education-card" key={i}>
              <p className="edu-period">{item.period}</p>
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-school">{item.school}</p>
              <span className="edu-result">
                {item.result} &nbsp;·&nbsp; {item.gpa}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
