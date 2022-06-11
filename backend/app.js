const express = require("express");
const userRouter = require("./routes/user");


const app = express();
app.use(express.json())
app.use('/api/user', userRouter);



app.get('/', (req, res) => {
    res.send('<h1>My Page</h1>')
});

app.listen(8001, () => {
    console.log("Run On 8001 Port")
});