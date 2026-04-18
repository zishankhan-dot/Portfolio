import React from "react";
import { experience } from "../data/portfolio_data.js";

export default function Experience(){
  return (
    <section className="section container" id="experience">
      <p className="eyebrow">Experience</p>
      <h2>Professional Experience</h2>
      <div className="grid">
        {experience.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.role}</h3>
            <p className="subheading">{item.company}</p>
            <p className="muted">{item.period}</p>
            <ul className="bullet-list">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
