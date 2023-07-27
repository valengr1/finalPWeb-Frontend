import axios from "axios";

export async function postBook(book) {
  const bookToPost = {
    titulo: book.titulo,
    edicion: book.edicion,
    autor: book.autor,
    idCategoria: book.idCategoria,
  };
  await axios.post("http://localhost:9000/api/v1/books", bookToPost);
}
