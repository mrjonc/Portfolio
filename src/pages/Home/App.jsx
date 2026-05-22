import "./App.css";
import NavBar from "../../components/NavBar.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app.container">
      <NavBar />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
