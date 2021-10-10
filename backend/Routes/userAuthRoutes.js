const express = require('express');
const routes = express.Router();
const userAuth = require('../Controller/userController');

routes.post('/api/signup',userAuth.SignUp);

module.exports = routes;