import React from "react";  
import {profile} from "../data/portfolio_data.js";


export default  function Header(){
    return (
        <header className="hero">
        <div className="container">
            <p className="eyebrow">Available for software engineering opportunities</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="tagline">{profile.tagline}</p>
            <p className="summary">{profile.summary}</p>

                <div className="hero-buttons">
                <a href="#projects" className="btn primary">Projects</a>
                <a href="#education" className="btn primary">Education</a>
                <a href="#experience" className="btn primary">Experience</a>
                <a href="#skills" className="btn primary">Skills</a>
                <a href={profile.resume} className="btn secondary" target="_blank" rel="noreferrer">
                    Resume
                </a>
                </div>

                <div className="contact-row">
                <span>{profile.location}</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>{profile.phone}</span>
                </div>

                <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
        </div>
        </header>

    );
};
