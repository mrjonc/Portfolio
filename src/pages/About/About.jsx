import styles from "../About/About.module.css";

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1>Sobre mim:</h1>
          <p style={{ color: "#95a5a6" }}>
            Olá, eu sou um Desenvolvedor Front-End <br /> e me chamo Jonathan!
          </p>
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas em transição de
            carreira para a área de Tecnologia, com foco em Desenvolvimento Web
            Frontend-End. Busco oportunidade como Desenvolvedor Júnior para
            aplicar sólidos conhecimentos em lógica de programação, JavaScript e
            frameworks modernos, aliados à minha experiência prévia em produção.
          </p>
        </div>

        <div className={styles.containerRight}>
          <img
            src="../public/assets/pagina-programacao.jpg"
            alt="Tela com codigos em JavaScript"
          />
        </div>
      </div>
    </>
  );
}

export default About;
