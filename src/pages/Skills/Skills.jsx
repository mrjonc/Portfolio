import styles from "../Skills/Skills.module.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  const skills = [
    {
      logo: "/assets/HTML.png",
      name: "HTML",
    },

    {
      logo: "/assets/CSS.png",
      name: "CSS",
    },

    {
      logo: "/assets/js.jpg",
      name: "JAVASCRIPT",
    },

    {
      logo: "/assets/react.png",
      name: "REACT.JS",
    },

    {
      logo: "/assets/node.png",
      name: "NODE.JS",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <h1>SKILLS</h1>
        <div className={styles.cards}>
          {skills.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img src={item.logo} alt={item.name} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
