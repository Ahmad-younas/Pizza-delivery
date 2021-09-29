const express = require('express');
const routes = express.Router();
const userRoutes = require('../Controller/userController');

routes.get('/',userRoutes.getData);
routes.post('/post',userRoutes.InsertData);
module.exports=routes