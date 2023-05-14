function start(x1, y1, x2, y2) {
    let distance1 = Math.sqrt(x1*x1 + y1*y1);
    let distance2 = Math.sqrt(x2*x2 + y2*y2);
    let distance3 = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

    // Ако искаме да избегнем if проверките
    console.log(Number.isInteger(distance1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(distance2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(Number.isInteger(distance3) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    // Със if проверка
    // if (Number.isInteger(distance1)) {
    //     console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    //   } else {
    //     console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    //   }
      
    //   if (Number.isInteger(distance2)) {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    //   } else {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    //   }
      
    //   if (Number.isInteger(distance3)) {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    //   } else {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    //   }
  }
  
  start(3, 0, 0, 4);
  