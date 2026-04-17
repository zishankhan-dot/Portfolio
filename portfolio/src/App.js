import React from "react";
import "./App.css";
import footer from "./components/footer";
import header from "./components/header";
import experience from "./components/experience";
import projects from "./components/projects";
import education from "./components/education";
import skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <header />
      <experience />
      <projects />
      <education />   
      <skills />
      <footer />
    </div>
  );
}

export default App;