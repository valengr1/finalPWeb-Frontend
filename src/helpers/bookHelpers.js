import Swal from "sweetalert2";
import { deleteBook, postBook, updateBook } from "../services/bookServices";

export function bookFilters(
  searchByTitle,
  searchByAuthor,
  searchByCategory,
  books
) {
  var results = [];

  if (!searchByTitle && !searchByCategory && !searchByAuthor) {
    results = books;
  } else if (searchByTitle) {
    results = books.filter((elemento) => {
      if (
        elemento.titulo
          .toString()
          .toLowerCase()
          .includes(searchByTitle.toLowerCase())
      ) {
        return elemento;
      }
    });
  } else if (searchByCategory) {
    results = books.filter((elemento) => {
      if (
        elemento.categoria
          .toString()
          .toLowerCase()
          .includes(searchByCategory.toLowerCase())
      ) {
        return elemento;
      }
    });
  } else if (searchByAuthor) {
    results = books.filter((elemento) => {
      if (
        elemento.autor
          .toString()
          .toLowerCase()
          .includes(searchByAuthor.toLowerCase())
      ) {
        return elemento;
      }
    });
  }
  return results;
}

export function elimination(id, setIsUpdate) {
  Swal.fire({
    title: "Estas seguro?",
    text: "No podras revertir los cambios",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, eliminalo",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBook(id);
      Swal.fire("Eliminado!", "El libro fue eliminado", "success");
      setIsUpdate(true);
    }
  });
}

export function fieldVerificationAdd(book, setBook, navigate) {
  if (!book.autor || !book.edicion || !book.idCategoria || !book.titulo) {
    Swal.fire({
      title: "Todos los campos deben estar completos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  } else if (book.edicion <= 0) {
    Swal.fire({
      title: `El valor del campo edicion no es valido`,
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

export function fieldVerificationUpdate(book, bookId, navigate) {
  if (!book.autor || !book.edicion || !book.idCategoria || !book.titulo) {
    Swal.fire({
      title: "Todos los campos deben estar completos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    });
  } else if (book.edicion <= 0) {
    Swal.fire({
      title: "El valor del campo edicion no es valido",
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
