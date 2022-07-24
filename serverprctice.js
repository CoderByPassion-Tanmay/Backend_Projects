const express = require("express");
const app = express();
// app.get("/sayHello", function (req,res) {
//     res.end("hello be")
// })
app.use(express.json());
app.get("/square/:num1", function (req,res) {
    
    let no = req.params.num1;
    let result = no * no ;
    res.end("result  "+ result);
})
app.post("/sayConnect" , function(req ,result)
{

    
    console.log("data",req.body);
    res.end("post wala server")
})
app.listen(3000 , function ()
{
    console.log("Sevcbbhxcvhrvercvhn error 202");
})