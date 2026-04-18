import React from "react";
import { projects } from "../data/portfolio_data.js";

export default function Projects(){
  return (
    <section className="section container" id="projects">
      <p className="eyebrow">Projects</p>
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <p className="card-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="card-description">{project.description}</p>

            <ul className="bullet-list">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="tag-list">
              {project.tech.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>

            <div className="card-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn small primary">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn small secondary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
