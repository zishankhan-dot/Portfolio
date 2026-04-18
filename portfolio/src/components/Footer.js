import React from "react";
import { profile } from "../data/portfolio_data.js";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h2>Let’s build something meaningful</h2>
        <p>
          I am interested in graduate software engineering, backend, cloud, AI,
          and full-stack roles where I can contribute to real product development.
        </p>

        <div className="card-links">
          <a href={`mailto:${profile.email}`} className="btn primary">Email Me</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn secondary">
            View GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
