const express = require("express");
const app = express();
// app.get("/sayHello", function (req,res) {
//     res.end("hello be")
// })
app.use(express.json());
app.get("/sayHello", function (req,res) {
    res.end("hello boss")
})
app.post("/sayConnect" , function(req ,res)
{
    console.log("data",req.body);
    res.end("post wala server")
})
app.listen(3000 , function ()
{
    console.log("Sevcbbhxcvhrvercvhn error 202");
})