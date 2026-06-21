import React from "react";
import { experience } from "../data/portfolio_data.js";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <p className="section-eyebrow">Career</p>
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <p className="timeline-period">{item.period}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul className="timeline-points">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
