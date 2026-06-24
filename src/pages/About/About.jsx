import styles from "../About/About.module.css";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerRight}>
          <img
            src="/assets/intro-dev.png"
            alt="Tela com codigos em JavaScript"
          />
        </div>
        <div className={styles.containerLeft}>
          <h1>Sobre mim:</h1>
          <p style={{ color: "#95a5a6", fontSize: "3rem" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Olá, eu sou um Front-End Developer e me chamo Jonathan!",
                  )
                  .start();
              }}
              options={{
                delay: 50,
                cursor: "|",
              }}
            />
          </p>
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas em transição de
            carreira para a área de Tecnologia, com foco em Desenvolvimento Web
            Front-End. Busco oportunidade como Desenvolvedor Júnior para aplicar
            sólidos conhecimentos em lógica de programação, JavaScript e
            frameworks modernos, aliados à minha experiência prévia em produção.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
