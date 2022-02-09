const express = require('express');
const route = new express.Router();
const postmodule = require('../controller/controller');
const { signUpValidation, loginValidation ,accesstokenvarify} = require("../Validation");

route.post('/signUp', signUpValidation, postmodule.signUP);
route.post('/login',loginValidation,postmodule.login)
route.get('/show',postmodule.getUserdata);
route.get('/edit/:id',postmodule.edituser);
route.post('/update/:id',postmodule.updateUser);
route.get('/delete/:id',postmodule.deleteUser);


module.exports = route;