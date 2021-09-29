const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require('./Routes/userDataRoutes');
const userDataRoutes = require('./Routes/userAuthRoutes');
const bodyParser = require("body-parser");
dotenv.config();
connectDb();
const app = express();
app.use(bodyParser.urlencoded({extended:true} ));
//app.use(bodyParser.json());
app.use(userRoutes);
app.use(userDataRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port: ${process.env.PORT}`);
});