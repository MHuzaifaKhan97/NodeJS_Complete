const express = require('express');
const path = require('path')

const app = express();


const publicPath = path.join(__dirname,"/public");
console.log(publicPath);

// It's a middleware
app.use(express.static(publicPath))
// static method use to load static files.

app.listen(3000, ()=> console.log('Server is running'));


// http://localhost:3000/index.html  => to check it