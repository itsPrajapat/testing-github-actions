const express = require('express');
const app = express();
const port = 5000


app.get("/", (req, res)=>{
    res.send("Hello Bhavesh!!")
})

app.listen(port, ()=>{
    console.log(`App is listening on port http://localhost:${port}`);
})