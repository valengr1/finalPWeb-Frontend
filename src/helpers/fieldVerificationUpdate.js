import Swal from "sweetalert2";
import axios from "axios";

export async function fieldVerificationUpdate(book, bookId, navigate) {
  if (!book.autor || !book.edicion || !book.idCategoria || !book.titulo) {
    Swal.fire({
      title: "Todos los campos deben estar completos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  } else {
    const data = {
      titulo: book.titulo,
      autor: book.autor,
      edicion: book.edicion,
      idCategoria: book.idCategoria,
    };
    await axios.put("http://localhost:9000/api/v1/books/" + bookId, data);
    Swal.fire("Modificado!", "El libro fue modificado", "success");
    navigate("/books");
  }
}
