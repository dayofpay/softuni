
const { log } = require('console');
const fs = require('fs');


fs.readFile('./test.txt',"utf-8",(err,text) => {
    if(err){
        console.log(err);
    }


    console.log(text);
})