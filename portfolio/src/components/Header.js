import React from "react";
import { profile } from "../data/portfolio_data.js";
import ZishanImage from "./ZishanKhan.png";

export default function Header() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-heading">
            <span className="hero-greeting">
              <span className="hi">Hi!</span> I&apos;m
            </span>
            <span className="hero-name">Zishan Khan</span>
          </h1>

          <span className="hero-role">{profile.title}</span>

          <p className="hero-desc">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get In Touch &nbsp;›
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-bg">
            <img src={ZishanImage} alt="Zishan Khan" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
