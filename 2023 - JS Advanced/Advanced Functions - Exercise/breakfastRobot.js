function solution() {
    const ingredients = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
    };
  
    const recipes = {
      apple: { carbohydrate: 1, flavour: 2 },
      lemonade: { carbohydrate: 10, flavour: 20 },
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
  
    function restock(microelement, quantity) {
      ingredients[microelement] += quantity;
      return 'Success';
    }
  
    function cook(recipe, quantity) {
      const requiredIngredients = recipes[recipe];
      
      for (const ingredient in requiredIngredients) {
        const requiredQty = requiredIngredients[ingredient] * quantity;
        const availableQty = ingredients[ingredient];
        
        if (requiredQty > availableQty) {
          return `Error: not enough ${ingredient} in stock`;
        }
      }
      
      for (const ingredient in requiredIngredients) {
        const requiredQty = requiredIngredients[ingredient] * quantity;
        ingredients[ingredient] -= requiredQty;
      }
      
      return 'Success';
    }
  
    function report() {
      return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
  
    return function (input) {
      const [command, parameter1, parameter2] = input.split(' ');
  
      if (command === 'restock') {
        return restock(parameter1, Number(parameter2));
      } else if (command === 'prepare') {
        return cook(parameter1, Number(parameter2));
      } else if (command === 'report') {
        return report();
      }
    };
  }
  
let manager = solution ();
console.log(manager("restock flavour 50")); // Success
console.log (manager("prepare lemonade 4")); // Error: not enough carbohydrate in