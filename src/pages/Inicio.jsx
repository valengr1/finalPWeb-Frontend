import styles from "./../styles/Inicio.module.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Inicio() {
  return (
    <Fade duration={1500}>
      <div className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <li className={styles.li}>
              <ul className={styles.ul}>KeepBook</ul>
              <ul className={styles.ulBtn}>
                <Link
                  to={"/books"}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Mis libros
                </Link>
              </ul>
            </li>
          </nav>
        </header>
        <main className={styles.main}>
          <section className={styles.section}>
            <article className={styles.article}>
              <p className={styles.p}>
                Tal vez los sueños corren porque no dejamos de perseguirlos.
              </p>
              <p className={styles.pLibro}>- Las almas de Brandon.</p>
            </article>
            <article className={styles.article}>
              <p className={styles.p}>
                Todo cambio es duro al principio, desordenado a la mitad y
                precioso al final.
              </p>
              <p className={styles.pLibro}>- El club de las 5 de la mañana</p>
            </article>
            <article className={styles.article}>
              <p className={styles.p}>
                Lo único que nos da miedo cuando nos asomamos a la muerte o a la
                oscuridad, es lo desconocido
              </p>
              <p className={styles.pLibro}>- Harry Potter</p>
            </article>
          </section>
        </main>
      </div>
    </Fade>
  );
}

export default Inicio;
