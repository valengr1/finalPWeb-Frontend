import { Link } from "react-router-dom";
import styles from "./../styles/Books.module.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { bookFilters } from "../helpers/filterBooks";
import BooksCategories from "../hooks/BooksCategories";
import { elimination } from "../helpers/elimination";

function Books() {
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByAuthor, setSearchByAuthor] = useState("");
  const { books, categories, setIsUpdate } = BooksCategories();

  var results = bookFilters(
    searchByTitle,
    searchByAuthor,
    searchByCategory,
    books
  );
  const handleDelete = (id) => {
    elimination(id, setIsUpdate);
  };

  const handleTitleChange = (e) => {
    setSearchByTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setSearchByAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSearchByCategory(e.target.value);
  };

  return (
    <Fade duration={1500}>
      <div className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.brandName}>
              <Link to={"/"} className={styles.nameLink}>
                <i className="fa-solid fa-house"></i>
              </Link>
            </div>
            <ul className={styles.lookingFor}>
              <li className={styles.name}>
                <input
                  type="text"
                  className={styles.nameInput}
                  placeholder="Titulo"
                  onChange={handleTitleChange}
                  name="searchByTitle"
                />
              </li>
              <li className={styles.name}>
                <input
                  type="text"
                  className={styles.nameInput}
                  placeholder="Autor"
                  onChange={handleAuthorChange}
                  name="searchByTitle"
                />
              </li>
              <li className={styles.category}>
                <select
                  onChange={handleCategoryChange}
                  name=""
                  id=""
                  className={styles.categorySelect}
                >
                  <option className={styles.option} value="">
                    All
                  </option>
                  {categories.map((category) => (
                    <option
                      className={styles.option}
                      value={category.nombre}
                      key={category.id}
                    >
                      {category.nombre}
                    </option>
                  ))}
                </select>
              </li>
              <li className={styles.addBook}>
                <Link to={"/add"} className={styles.addLink}>
                  <button className={styles.addBookBtn}>+</button>
                </Link>
              </li>
            </ul>
            <p className={styles.pCantidadLibros}>{results.length}</p>
          </nav>
        </header>
        <main className={styles.main}>
          <section className={styles.cardBox}>
            {results.map((book) => (
              <div key={book.id} className={styles.card}>
                <h3 className={styles.cardTitulo}>{book.titulo}</h3>
                <h3 className={styles.cardAutor}>{book.autor}</h3>
                <h3 className={styles.cardEdicion}>Edicion: {book.edicion}</h3>
                <h3 className={styles.cardCategoria}>{book.categoria}</h3>
                <div className={styles.cardButtons}>
                  <Link className={styles.addLink} to={"/update/" + book.id}>
                    <button className={styles.cardBtnModificar}>
                      Modificar
                    </button>
                  </Link>
                  <button
                    className={styles.cardBtnEliminar}
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Fade>
  );
}

export default Books;
