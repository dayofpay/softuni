function print(monthNumber) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    if (monthNumber < 1 || monthNumber > 12) {
      console.log("Error!");
      return;
    }
    
    console.log(months[monthNumber - 1]);
  }
  
print(3);