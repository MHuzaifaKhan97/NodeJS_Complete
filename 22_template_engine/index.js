// There is alot of template engine
// EJS is most commoly used template engine

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,"public");

app.set('view engine','ejs');

app.get('/profile',(req,res)=> {
    const user = {
        name : "Huzaifa",
        email: "huzaifa@gmail.com",
        city: "Karachi"
    }
    res.render('profile', {user});
})

app.listen(3000);