const express = require('express');
const routes = express.Router();
const userAuth = require('../Controller/userController');

routes.post('/signup',userAuth.SignUp);

module.exports = routes;