import Swal from "sweetalert2";
import axios from "axios";

export async function fieldVerificationAdd(book, setBook, navigate) {
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
      edicion: book.edicion,
      autor: book.autor,
      idCategoria: book.idCategoria,
    };
    await axios.post("http://localhost:9000/api/v1/books", data);
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
