function result() {
  let collection = '';

  return {
    append: (text) => (collection += text),
    removeStart: (n) => (collection = collection.slice(n)),
    removeEnd: (n) => (collection = collection.slice(0, -n)),
    print: () => console.log(collection)
  };
}