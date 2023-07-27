import { useState } from "react";
import styles from "./../styles/Update.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { fieldVerificationUpdate } from "../helpers/fieldVerificationUpdate";
import BooksCategories from "../hooks/BooksCategories";

function Update() {
  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    edicion: 0,
    idCategoria: 0,
  });
  const { categories } = BooksCategories();
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    fieldVerificationUpdate(book, bookId, navigate);
  };

  return (
    <Fade duration={2500}>
      <div className={styles.body}>
        <main className={styles.main}>
          <div className={styles.formIn}>
            <form action="" className={styles.form}>
              <h2 className={styles.h2}>Modificar libro</h2>
              <div className={styles.tituloBox}>
                <label htmlFor="" className={styles.tituloLabel}>
                  Titulo
                </label>
                <input
                  onChange={handleChange}
                  name="titulo"
                  type="text"
                  className={styles.tituloInput}
                  id="inputTitulo"
                />
              </div>
              <div className={styles.autorBox}>
                <label htmlFor="" className={styles.autorLabel}>
                  Autor
                </label>
                <input
                  onChange={handleChange}
                  name="autor"
                  type="text"
                  className={styles.autorInput}
                />
              </div>
              <div className={styles.edicionBox}>
                <label htmlFor="" className={styles.edicionLabel}>
                  Edicion
                </label>
                <input
                  name="edicion"
                  onChange={handleChange}
                  type="number"
                  className={styles.edicionInput}
                />
              </div>
              <div className={styles.categoriaBox}>
                <label htmlFor="" className={styles.categoriaLabel}>
                  Categoria
                </label>
                <select
                  name="idCategoria"
                  onChange={handleChange}
                  id=""
                  className={styles.select}
                >
                  <option value="" className={styles.option}>
                    Todos
                  </option>
                  {categories.map((category) => (
                    <option
                      value={category.id}
                      key={category.id}
                      className={styles.option}
                    >
                      {category.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.boxBtnAgregar}>
                <button onClick={handleUpdate} className={styles.btnAgregar}>
                  Modificar
                </button>
                <Link to={"/books"}>
                  <button className={styles.btnAgregar}>Volver</button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Fade>
  );
}

export default Update;
