const mongoose = require("mongoose");

const connectDB = async =()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connection Successful");
    }).catch((err)=>{
        console.log(`err:${err}`);
    })
}
module.exports = connectDB;
