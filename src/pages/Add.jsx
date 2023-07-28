import { useState } from "react";
import styles from "./../styles/Add.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import BooksCategories from "../hooks/BooksCategories";
import { fieldVerificationAdd } from "../helpers/fieldVerificationAdd";

function Add() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    edicion: 0,
    idCategoria: 0,
  });
  const { categories } = BooksCategories();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    fieldVerificationAdd(book, setBook, navigate);
  };

  return (
    <Fade duration={1500}>
      <div className={styles.body}>
        <main className={styles.main}>
          <div className={styles.formIn}>
            <form className={styles.form}>
              <h2 className={styles.h2}>Agregar un nuevo libro</h2>
              <div className={styles.tituloBox}>
                <label htmlFor="" className={styles.tituloLabel}>
                  Titulo
                </label>
                <input
                  name="titulo"
                  onChange={handleChange}
                  type="text"
                  className={styles.tituloInput}
                />
              </div>
              <div className={styles.autorBox}>
                <label htmlFor="" className={styles.autorLabel}>
                  Autor
                </label>
                <input
                  type="text"
                  name="autor"
                  onChange={handleChange}
                  className={styles.autorInput}
                />
              </div>
              <div className={styles.edicionBox}>
                <label htmlFor="" className={styles.edicionLabel}>
                  Edicion
                </label>
                <input
                  type="number"
                  name="edicion"
                  onChange={handleChange}
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
                <button onClick={handleClick} className={styles.btnAgregar}>
                  Agregar
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

export default Add;
