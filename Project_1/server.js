const express = require("express");
const userModel = require('./userModal');
const app = express();
// app.get("/sayHello", function (req,res) {
//     res.end("hello be")
// })
app.use(express.json());


app.post("/Signup",function (req,res)
{
    let data = req.body;

    console.log(data);
    
    res.end("Data Recieved")
})


app.listen(3000 , function ()
{
    console.log("Sevcbbhxcvhrvercvhn error 202");
})