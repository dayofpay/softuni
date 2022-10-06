function getValues(){
    const values = {
        totalTries : 0,
        books : ["In Search of Lost Time","Ulysses","Don Quixote","The Great Gatsby","Moby Dick"],
        authors : ["Marcel Proust","James Joyce","Miguel de Cervantes","F. Scott Fitzgerald","Herman Melville"],
        finalResult : "In Search of Lost Time"
    }
    getBookData(["In Search of Lost Time","Ulysses","Don Quixote","The Great Gatsby","Moby Dick"]);
    function getBookData(inputData){
        for(let startPoint = 0; startPoint <= inputData.length; startPoint++){
            if(inputData[startPoint] != values.finalResult){
                values.totalTries++;
            }
            else{
                
                console.log(`You found the right book after ${values.totalTries} tries \r\n Book Author is ${values.authors[values.books.indexOf(values.finalResult)]}`);
            }
        }
    }
}
getValues();