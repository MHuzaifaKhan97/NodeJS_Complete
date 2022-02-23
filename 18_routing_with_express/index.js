const express = require('express')
const app = express();

// http://localhost:3000/?name=Huzaifa  => hit this on url

app.get('/', (req, res) => {
    console.log("Data send by browser", req.query.name)
    res.send("Welcome, "+ req.query.name)
})

app.listen(3000, () => console.log('server is running'));