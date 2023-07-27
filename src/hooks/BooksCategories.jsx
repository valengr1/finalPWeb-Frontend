import { useState, useEffect } from "react";
import axios from "axios";

function BooksCategories() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const results = await axios.get(
        "http://localhost:9000/api/v1/categories"
      );
      setCategories(results.data);
    };
    const getBooks = async () => {
      const results = await axios.get("http://localhost:9000/api/v1/books");
      setBooks(results.data);
    };
    getCategories();
    getBooks();
    setIsUpdate(false);
  }, [isUpdate]);

  return { books, categories, setIsUpdate };
}

export default BooksCategories;
