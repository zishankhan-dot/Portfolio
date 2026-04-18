import React from "react";
import {skills} from "../data/portfolio_data.js";

export default function Skills(){
    return(
        <section className="section container" id="skills">     
        <p className="eyebrow">Skills</p>
        <h2>Technical Proficiencies</h2>
        <div className="grid">
        {Object.entries(skills).map(([category, skillset]) => (
          <div className="card" key={category}>
            <h3>{category}</h3>
            <ul>
              {skillset.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        </section>
       

    );
}