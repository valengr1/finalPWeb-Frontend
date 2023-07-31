import axios from "axios";

export async function updateBook(bookId, book) {
  try {
    const bookToUpdate = {
      titulo: book.titulo,
      autor: book.autor,
      edicion: book.edicion,
      idCategoria: book.idCategoria,
    };
    await axios.put(
      "http://localhost:9000/api/v1/books/" + bookId,
      bookToUpdate
    );
  } catch (error) {
    throw new Error(error);
  }
}
