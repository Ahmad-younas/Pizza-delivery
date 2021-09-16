const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
dotenv.config();

connectDb();
const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port: ${process.env.PORT}`);
});