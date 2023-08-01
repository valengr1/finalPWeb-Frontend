import { useState, useEffect } from "react";
import axios from "axios";

function BooksCategories() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const getCategories = () => {
      axios
        .get("http://localhost:9000/api/v1/categories")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getBooks = () => {
      axios
        .get("http://localhost:9000/api/v1/books")
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCategories();
    getBooks();
    setIsUpdate(false);
  }, [isUpdate]);

  return { books, categories, setIsUpdate };
}

export default BooksCategories;
