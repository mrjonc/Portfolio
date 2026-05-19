import "./App.css";
import NavBar from "../../components/NavBar.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
