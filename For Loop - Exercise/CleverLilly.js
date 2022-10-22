function start(input){
   let age = Number(input[0]);


   let price = Number(input[1]);


   let onePrice = Number(input[2]);


   let total = 0;


   let totalYears = 0;


   let totalToys = 0;


   let moneyMultiplier = 0;

   for(let i= 1;i <=age;i++){
    if(i % 2 == 0 ){

        
        moneyMultiplier += 10;


        total+= moneyMultiplier;


        totalYears++;


    }
    else{
        totalToys++;
    }
}
let soldToys = totalToys * onePrice;
let totalRemoved = totalYears * 1;
let totalSpesteni = (total + soldToys) - totalRemoved;
if(totalSpesteni >= price){
    console.log(`Yes! ${Math.abs((totalSpesteni - price)).toFixed(2)}`);
}else{
    console.log(`No! ${Math.abs((price - totalSpesteni)).toFixed(2)}`);
}
    
   
}
start((["10",
"170.00",
"6"]));