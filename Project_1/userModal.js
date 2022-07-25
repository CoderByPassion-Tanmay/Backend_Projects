
const mongoose = require('mongoose');

let dblink = "mongodb+srv://admin:admin@cluster0.oqx9pmh.mongodb.net/?retryWrites=true&w=majority"
// let  dblink = mongoose.connect('mongodb://localhost:27017/test');

mongoose
.connect(dblink)
.then(function () {
    console.log("connected");
})
.catch(function (err) {
    console.log("error", err);
})


let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: "String",
        minLength: 10,
        maxLength: 10
    },
    pic: {
        type: String,
        default: "dp.png"
    },
    address: {
        type: String,
    }
})


const userModel = mongoose.model("HelloBoss",userSchema);
module.exports = userModel;