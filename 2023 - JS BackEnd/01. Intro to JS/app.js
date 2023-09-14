const http = require('http');

const port = 7235;


const server = http.createServer((req,res) => {
    const {method,url} = req;
    console.log(req);

    console.log(`Server is running on port ${port}`);

    console.log('-----CONNECTION---');

    console.log(`URL : ${url}`);
    console.log(`Method : ${method}`);

    console.log('-----CONNECTION---');
    res.write('<html><p>test</p></html>');
    res.end();
})


server.listen(port);