import React from "react";
import { projects } from "../data/portfolio_data.js";

export default function Projects() {
  return (
    <section className="works-section" id="projects">
      <div className="works-inner">
        <div className="works-header">
          <div className="works-title-wrap">
            <div className="works-title-line" />
            <h2 className="works-title">
              My <strong>Projects</strong>
            </h2>
          </div>
          <p className="works-desc">
            Check out my recent and most impactful projects across AI, cloud
            infrastructure, full-stack development, and systems engineering.
          </p>
        </div>

        <div className="works-grid">
          {projects.map((project, i) => (
            <article className="project-card" key={i}>
              <div className="card-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="card-tags">
                  {project.tech.slice(0, 2).map((t, j) => (
                    <span className={`card-tag${j === 1 ? " alt" : ""}`} key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
                <a
                  href={project.github !== "#" ? project.github : null}
                  target="_blank"
                  rel="noreferrer"
                  className="card-explore"
                >
                  Explore ›
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
