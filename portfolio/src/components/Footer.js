import React from "react";
import { profile } from "../data/portfolio_data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom" style={{ maxWidth: "1240px", margin: "0 auto", borderTop: "none", padding: "2rem 1.5rem" }}>
        <span>© 2025 Zishan Khan. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: "0.82rem" }}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: "0.82rem" }}>
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: "0.82rem" }}>
            Resume
          </a>
        </div>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
