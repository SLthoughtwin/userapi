const express = require('express');
const route = new express.Router();
const postmodule = require('../controller/controller');
const mailsystem = require('../sendmail/sendmail')
const { signUpValidation, loginValidation ,accesstokenvarify,uploadfile} = require("../Validation");

route.post('/signUp',uploadfile,signUpValidation,postmodule.signUP);
route.post('/login',loginValidation,mailsystem,postmodule.login)
route.get('/show',postmodule.getUserdata);
route.get('/edit/:id',postmodule.edituser);
route.post('/update/:id',postmodule.updateUser);
route.get('/delete/:id',postmodule.deleteUser);


module.exports = route;