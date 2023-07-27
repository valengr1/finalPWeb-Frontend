import Swal from "sweetalert2";
import { postBook } from "../services/postBook";

export async function fieldVerificationAdd(book, setBook, navigate) {
  if (!book.autor || !book.edicion || !book.idCategoria || !book.titulo) {
    Swal.fire({
      title: "Todos los campos deben estar completos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  } else {
    postBook(book);
    setBook({
      titulo: "",
      edicion: 0,
      autor: "",
      idCategoria: 0,
    });
    Swal.fire("Agregado!", "El libro fue agregado", "success");
    navigate("/books");
  }
}
