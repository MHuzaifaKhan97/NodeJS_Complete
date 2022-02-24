const express = require('express')
const app = express();

// Rendering HTML
app.get('/',(req,res) => {
    // res.send("<h1> This is home page </h1>");
    // OR
    res.send(`
        <p>Enter Name </p>
        <input type="text" value="${req.query.name}" />
        <button>Click me</button>
        <br />
        <a href="/about"> Go to about </a>
    
        `)
});

// Rendering JSON

app.get('/json', (req,res) => {
    res.send({
        name:"Huzaifa",
        email:"huzaifa@gmail.com"
    })
})

// Link Pages
app.get('/about',(req,res) => {
    // res.send("<h1> This is home page </h1>");
    // OR
    res.send(`
        <a href="/"> Go Back </a>
    `)
});

app.listen(3000, ()=> console.log('Server is running'));