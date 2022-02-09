const http = require('http')

http.createServer((req,res) => {

    res.write('<h1>Hello World</h1>')
    res.write('This is Huzaifa Nadir');
    res.end();
}).listen(5000);

// OR 

// http.createServer((req,res) => {
//     dataControl(req,res);
// }).listen(5000);

// OR 

// http.createServer(dataControl).listen(5000);

// function dataControl(req,res){
//     res.write('<h1>Hello</h1>')
//     res.write('This is Huzaifa Nadir');
//     res.end();
// }