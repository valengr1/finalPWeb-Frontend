export function bookFilters(searchByTitle, searchByCategory, books) {
  var results = [];
  if (!searchByTitle && !searchByCategory) {
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
  }
  return results;
}
