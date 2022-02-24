// Route level middle can be applied on single route, group route and all routes 

const express = require('express')
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();
// app.use(reqFilter);

//Group Middleware
route.use(reqFilter);

route.get('/', (req,res) => {
    res.send('Welcome to home page')
})
route.get('/users', (req,res) => {
    res.send('Welcome to users page')
})
app.get('/about', (req,res) => {
    res.send('Welcome to about page')
})
app.get('/contact', (req,res) => {
    res.send('Welcome to contact page')
})

app.use('/',route);

app.listen(3000);
