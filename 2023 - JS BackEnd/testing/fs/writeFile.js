// from constant


const fs = require('fs');
const { Readable } = require('stream');
let text = "this is test message123";

let readStream = Readable.from([text]);

let writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Data has been written to output.txt');
});
