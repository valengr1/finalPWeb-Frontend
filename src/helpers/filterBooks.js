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
