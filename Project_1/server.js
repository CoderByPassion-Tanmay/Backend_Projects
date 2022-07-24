const express = require("express");
const app = express();
app.get("/sayHello", function (req,res) {
    res.end("hello be")
})

app.listen(3000 , function ()
{
    console.log("Server stands 202");
})