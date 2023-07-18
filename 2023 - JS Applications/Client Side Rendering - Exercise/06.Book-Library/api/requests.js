export async function fetchBooks() {
    return await fetch('http://localhost:3030/jsonstore/collections/books');
  }
