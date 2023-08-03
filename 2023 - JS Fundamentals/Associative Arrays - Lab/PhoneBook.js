function getContacts(inputData){
    let dict = {};
    inputData.forEach(person => {
        let getPerson = person.split(' ');
        dict[getPerson[0]] = getPerson[1];
    });


    for(let x in dict){
        console.log(`${x} -> ${dict[x]}`);
    }
}
getContacts(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);