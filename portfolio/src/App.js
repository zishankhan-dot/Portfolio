import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
