const express = require('express');
const route = new express.Router();
const postmodule = require('../controller/controller');
const { signUpValidation, loginValidation } = require("../Validation");

route.post('/signUp', signUpValidation, postmodule.signUP);
route.post('/login',loginValidation,postmodule.login)
route.get('/show',postmodule.getUserdata);
route.patch('/update/:id',postmodule.updateUser);
route.delete('/delete/:id',postmodule.deleteUser);

module.exports = route;