const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Hello, This is Home Page </h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1> About Us Page </h1>')
});

app.listen(3000, () => {
    console.log("Express app is running");
})