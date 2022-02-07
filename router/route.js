const express = require('express');
const route = new express.Router();
const postmodule = require('../controller/controller');
const { signUpValidation, loginValidation ,accesstokenvarify} = require("../Validation");

route.post('/signUp', signUpValidation, postmodule.signUP);
route.post('/login',loginValidation,postmodule.login)
route.get('/show',accesstokenvarify,postmodule.getUserdata);
route.patch('/update/:id',accesstokenvarify,postmodule.updateUser);
route.delete('/delete/:id',accesstokenvarify,postmodule.deleteUser);

module.exports = route;