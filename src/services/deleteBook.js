import axios from "axios";

export async function deleteBook(id) {
  try {
    await axios.delete("http://localhost:9000/api/v1/books/" + id);
  } catch (error) {
    throw new Error(error);
  }
}
