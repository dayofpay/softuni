function start(input){
    let book = input[0];
    let bookIndex = 0;
    let found = false;
    while(bookIndex != input.length){
        bookIndex++;
        if(input[bookIndex] == book){
            console.log(`You checked ${bookIndex-=1} books and found it.`);
            found = true;
            break;
        }
        else if(input[bookIndex] == "No More Books"){
            bookIndex -= 1;
            break;
        }
        
    }
    if(found == false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookIndex} books.`);
    }
}
start(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);