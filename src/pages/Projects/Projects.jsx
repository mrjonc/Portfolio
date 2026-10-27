import styles from "../Projects/Projects.module.css";

const cardsProjects = [
  {
    img: "/assets/pokemon-page.png",
    projectName: "Pokedex API Request",
    description:
      "Requisição da PokeAPI, API focada em listar todos os 1000+ pokemons, separando eles em IDs e temporadas.",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    link: "https://pokedex-chi-sooty.vercel.app",
  },
  {
    img: "/assets/universe.png",
    projectName: "Universe Mode Dashboard",
    description: `Um projeto feito de fã para fã para gerir o modo de jogo chamado "Universe Mode" nos jogos da WWE.`,
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    link: "https://universemodedashboard.vercel.app",
  },
  {
    img: "/assets/library-movies-page.png",
    projectName: "Library Movies",
    description:
      "O projeto busca listar, buscar e detalhar todos os filmes presentes na API TMDB.",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    link: "https://library-movies-sigma.vercel.app",
  },
  {
    img: "/assets/to-do-list-page.png",
    projectName: "To-Do-List",
    description:
      "To-Do-List simples implementando o conceito básico do CRUD (Create, Read, Update & Delete).",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://to-do-list-project-drab.vercel.app/",
  },
  {
    img: "/assets/e-commerce.png",
    projectName: "EducaPlay",
    description:
      "E-commerce digital de vendas de cursos diversos focados em: tecnologia, marketing, design e soft skills",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://cursos-educa-play.vercel.app/",
  },
];

function Projects() {
  return (
    <div className={styles.cards}>
      {cardsProjects.map((item) => (
        <div key={item.projectName} className={styles.card}>
          <img className={styles.img} src={item.img} alt={item.projectName} />

          <div className={styles.informations}>
            <p className={styles.projectName}>{item.projectName}</p>
            <p className={styles.description}>{item.description}</p>

            <div className={styles.tags}>
              {item.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <a
              className={styles.btn}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
