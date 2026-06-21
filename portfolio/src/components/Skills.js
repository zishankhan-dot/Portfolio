import React from "react";
import { skills } from "../data/portfolio_data.js";

const ICONS = {
  "AI & Intelligent Systems": "AI",
  "Full Stack Development": "FS",
  "Cloud & DevOps": "CD",
  "Software Engineering": "SE",
  "Systems & Networking": "SN",
  "Data & Analytics": "DA",
};

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <p className="section-eyebrow">What I know</p>
        <h2 className="section-title">Skills &amp; Domains</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-icon">
                {ICONS[category] ?? "SK"}
              </div>
              <h3 className="skill-card-title">{category}</h3>
              <div className="skill-tags">
                {items.map((item, j) => (
                  <span className="skill-tag" key={j}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
