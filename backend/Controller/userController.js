const mongoose = require('mongoose');
const userData = require('../Model/userSchema');
exports.getData = (req,res,next)=>{
    res.send("Hello World");
}
exports.InsertData = (req,res,next) =>{
    console.log(req.body);
    res.send("ok from backend");
    res.status(200);
}
exports.SignUp = (req,res,next) =>{
    console.log(req.body);
    const user = new userData();
    user.fullName = req.body.name;
    user.email= req.body.email;
    user.password= req.body.password;
    user.save((error,doc) =>{
        if(error){
            console.log("error",error);
        }
    });
    userData.find()
}
