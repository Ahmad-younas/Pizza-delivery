const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');
const userSchema = new Schema({
    fullName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[isEmail,'invalid email']
    },
    password:{
      type:String,
      required:true
    }
});
module.exports=mongoose.model('userSchema',userSchema);