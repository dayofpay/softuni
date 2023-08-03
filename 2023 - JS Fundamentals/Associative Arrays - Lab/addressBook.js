function start(inputData){
    let book = {};
    for(let x of inputData){
        let data = x.split(":");
        book[data[0]] = data[1];
    }


    for(let x of Object.keys(book).sort()){
        console.log(`${x} -> ${book[x]}`);
    }
}
start([
    'Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'

]);