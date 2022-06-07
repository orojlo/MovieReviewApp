const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hi Im from Back Server</h1>')
});

app.get('/my', (req, res) => {
    res.send('<h1>My Page</h1>')
});

app.listen(8001, () => {
    console.log("Run On 8001 Port")
});