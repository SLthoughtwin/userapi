const Joi = require("joi");
const jwt = require('jsonwebtoken');

module.exports = {
  signUpValidation: (req, res, next) => {
    const validateUser = (user) => {
      const JoiSchema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        lastname: Joi.string().min(5).max(30).required(),
        email: Joi.string().email().min(5).max(50).required(),
        phone: Joi.number().required(),
        password:Joi.string().required(),
        cpassword: Joi.ref("password"),
      }).options({ abortEarly: false });
      return JoiSchema.validate(user);
    };

    const response = validateUser(req.body);
    if (response.error) {
      res.status(400).json({
        message: response.error.details[0].message,
        status: 400,
        success: false,
      });
    } else {
      next();
    }
  },

  loginValidation: (req, res, next) => {
    const loginUser = (user) => {
      const JoiSchema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      }).options({ abortEarly: false });
      return JoiSchema.validate(user);
    };
    const response = loginUser(req.body);
    if (response.error) {
      res.status(400).json({
        message: response.error.details[0].message,
        status: 400,
        success: false,
      });
    } else {
      next();
    }
  },

  accesstokenvarify: (req, res, next) => {
    const token = req.headers.authorization;
   if (!token) {
      return  res.status(400).json({
        message: "A token is required for authentication",
        status: 400,
        success: false,
      });
    }else{
        const authHeader = req.headers.authorization; 
        const bearerToken = authHeader.split(" ");
        const token = bearerToken[1];
        jwt.verify(token,"secretkeysthepieceof information",(error,payload)=>{
            if(error){
              res.status(400).json({
                message: "invalid token",
                status: 400,
                success: false,
              });
            }else{
               next();
            }
        })
    }

  },
}

