const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require('./Routes/userDataRoutes');
const userAuthRoutes = require('./Routes/userAuthRoutes');
const bodyParser = require("body-parser");
const cors = require('cors');
dotenv.config();

//Connect MongoDB
connectDb();

const app = express();
//body-parser
app.use(bodyParser.urlencoded({extended:true} ));
app.use(bodyParser.json());
app.use(cors({
    method:['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

//Define Router
app.all('**/',userRoutes);


// app.use(userRoutes);
// app.use(userAuthRoutes);


//Serve React Static files
app.use(express.static(__dirname + '../../frontend/myapp/build'));
app.use('*', express.static(__dirname + '../../frontend/myapp/build'));

//Server listen on Port
app.listen(process.env.PORT,()=>{
    console.log(`Server Listen on Port: ${process.env.PORT}`);
});