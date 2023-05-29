function createSortedList() {
    let data = {
      values: [],
      add: (value) => {
        data.values.push(value);
        data.values.sort((a, b) => a - b);
      },
      remove: (index) => {
        if (index >= 0 && index < data.values.length) {
          data.values.splice(index, 1);
        }
      },
      get: (index) => {
        if (index >= 0 && index < data.values.length) {
          return data.values[index];
        }
      },
      get size() {
        return data.values.length;
      },
    };
  
    return data;
  }
  
  let list = createSortedList();
  list.add(5);
  list.add(6);
  list.add(7);
  console.log(list.get(1));
  list.remove(1);
  console.log(list.get(1));
  