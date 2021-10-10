const express = require('express');
const routes = express.Router();
const userRoutes = require('../Controller/userController');


routes.get('/api/get',userRoutes.getData);
routes.post('/api/post',userRoutes.InsertData);
module.exports=routes