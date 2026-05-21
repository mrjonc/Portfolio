import styles from "../Projects/Projects.module.css";

function Projects() {
  const cardsProjects = [
    {
      img: "/assets/pokemon-page.png",
      projectName: "Pokedex API Request",
      description:
        "Requisição da PokeAPI, API focada em listar todos os 1000+ pokemons, separando eles em IDs e temporadas.",
      tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },

    {
      img: "/assets/landing-page.png",
      projectName: "Landing Page (Pixel Perfect)",
      description: `Uma Landing Page onde tentei aperfeiçoar a técnica de estudos chamada "Pixel Perfect" que consiste em pegar um projeto já existente e cria-lo colocando em pratica suas habilidades.`,

      tools: ["HTML", "CSS"],
    },

    {
      img: "/assets/library-movies-page.png",
      projectName: "Library Movies",
      description:
        "O projeto busca listar todos eles em formatos de cards, com um input de busca por palavras chaves e podendo interagir com eles ao clicar fazendo abrir outra aba que permite visualizar mais detalhes daquele filme especifico.",

      tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },

    {
      img: "/assets/to-do-list-page.png",
      projectName: "To-Do-List",
      description:
        "To-Do-List simples implementando o conceito básico do CRUD (Create, Read, Update & Delete).",

      tools: ["HTML", "CSS", "JavaScript"],
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
                <p style={{ color: "#95a5a6" }}>{item.projectName}</p>
                <p>{item.description}</p>

                <div className={styles.tags}>
                  {item.tools.map((tools, index) => {
                    return <span key={index}>{tools}</span>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
