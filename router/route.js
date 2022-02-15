const express = require('express');
const route = new express.Router();
const postmodule = require('../controller/controller');
const {mailsystem} = require('../sendmail/sendmail')
const { signUpValidation, loginValidation ,accesstokenvarify,uploadfile} = require("../Validation");

route.post('/signUp',uploadfile,signUpValidation,postmodule.signUP);
route.post('/login',loginValidation,postmodule.login,mailsystem)
route.get('/show',postmodule.getUserdata);
route.get('/edit/:id',postmodule.edituser);
route.post('/update/:id',postmodule.updateUser);
route.get('/delete/:id',postmodule.deleteUser);
route.post('/forgot-password',postmodule.forgotpassword)
route.get('/reset-password/:id/:token',postmodule.resetfunction);
route.post('/reset-password/:id/:token',postmodule.resetpassword)



module.exports = route;