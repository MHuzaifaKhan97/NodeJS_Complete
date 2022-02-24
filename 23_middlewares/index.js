// What is middlewares?

// some function used with routes, can be used to modify request and response.
// like user authentication, block site on specific country etc etc.
// Middleware write once and can be apply on every routes 

// Types of middleware
// - Application-Level middleware
// - Router-Level middleware
// - Error-handling middleware
// - Built-in middleware
// - Third-party-Level middleware

const express = require('express')
const app = express();

// Middleware (this is application level)
const reqFilter = (req, res, next) => {
    console.log("reqFilter");
    if(!req.query.age){
        res.send('please provide age')
    }
    else if(req.query.age <18){
        res.send('you can not access this page')
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('/', (req,res) => {
    res.send('Welcome to home page')
})
app.get('/users', (req,res) => {
    res.send('Welcome to users page')
})

app.listen(3000);
