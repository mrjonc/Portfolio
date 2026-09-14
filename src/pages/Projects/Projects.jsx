import styles from "../Projects/Projects.module.css";

function Projects() {
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
        "O projeto busca listar, buscar e detalhar todos os filmes presentes na API TMBD .",
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
  ];
  return (
    <>
      <div className={styles.cards}>
        {cardsProjects.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <img
                className={styles.img}
                src={item.img}
                alt={item.projectName}
              />
              <div className={styles.informations}>
                <p style={{ color: "#95a5a6", textTransform: "uppercase" }}>
                  {item.projectName}
                </p>
                <p style={{ color: "grey", fontSize: "0.7rem" }}>
                  {item.description}
                </p>

                <div className={styles.tags}>
                  {item.tools.map((tools, index) => {
                    return <span key={index}>{tools}</span>;
                  })}
                </div>

                <a href={item.link} target="_blank" rel="noreferrer">
                  <button>
                    <strong>Ver Projeto</strong>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
