import Swal from "sweetalert2";
import axios from "axios";

export async function elimination(id, setIsUpdate) {
  Swal.fire({
    title: "Estas seguro?",
    text: "No podras revertir los cambios",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, eliminalo",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete("http://localhost:9000/api/v1/books/" + id);
      Swal.fire("Eliminado!", "El libro fue eliminado", "success");
      setIsUpdate(true);
    }
  });
}
