import Swal from "sweetalert2";
import { updateBook } from "../services/updateBook";

export async function fieldVerificationUpdate(book, bookId, navigate) {
  if (!book.autor || !book.edicion || !book.idCategoria || !book.titulo) {
    Swal.fire({
      title: "Todos los campos deben estar completos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  } else {
    updateBook(bookId, book);
    Swal.fire("Modificado!", "El libro fue modificado", "success");
    navigate("/books");
  }
}
