import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from "../components/NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.contacts}>
          <img src="/assets/foto-perfil.jpg" alt="Foto do Desenvolvedor" />
          <div className={styles.links}>
            <a
              href="https://github.com/mrjonc"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              https://github.com/mrjonc
            </a>

            <a
              href="https://www.instagram.com/mr_jon____/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              @mr_jon___
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-laureano-lima/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              https://www.linkedin.com/in/jonathan-laureano-lima/
            </a>

            <a href="mailto:jonathanlaureano33.jl@gmail.com">
              <MdOutlineMailOutline />
              jonathanlaureano33.jl@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.informations}>
          <button>
            <a href="#about">Sobre mim</a>
          </button>
          <button>
            <a href="#skills">Habilidades</a>
          </button>
          <button>
            <a href="#projects">Projetos</a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
