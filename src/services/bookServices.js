import axios from "axios";

export function postBook(book) {
  const bookToPost = {
    titulo: book.titulo,
    edicion: book.edicion,
    autor: book.autor,
    idCategoria: book.idCategoria,
  };
  axios.post("http://localhost:9000/api/v1/books", bookToPost).catch((err) => {
    throw new Error(err);
  });
}

export function deleteBook(id) {
  axios.delete("http://localhost:9000/api/v1/books/" + id).catch((err) => {
    throw new Error(err);
  });
}

export function updateBook(bookId, book) {
  const bookToUpdate = {
    titulo: book.titulo,
    autor: book.autor,
    edicion: book.edicion,
    idCategoria: book.idCategoria,
  };
  axios
    .put("http://localhost:9000/api/v1/books/" + bookId, bookToUpdate)
    .catch((err) => {
      throw new Error(err);
    });
}
