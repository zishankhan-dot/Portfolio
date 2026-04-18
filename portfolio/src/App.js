import React from "react";
import "./App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Education from "./components/Education.js";
import Skills from "./components/Skills.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Education/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>

    </div>
  );
}


export default App;