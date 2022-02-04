const User = require("../model/model");
const jwt = require("jsonwebtoken");
module.exports = {
  signUP: async (req, res) => {
    const result = await new User(req.body);
    result
      .save()
      .then((data) => {
        res.status(201).json({
          data: data,
          statut: 201,
          success: true,
          message: "signUP successfully",
        });
      })
      .catch((error) => {
        res.status(400).json({
          data: error,
          statut: 400,
          success: false,
          message: error.message,
        });
      });
  },

  login: async (req, res) => {
    const result = await User.find({ email: req.body.email });
    if (result.length > 0) {
      if (result[0].password == req.body.password) {
        const token = jwt.sign(
          { email: req.body.email },
          "secretkeysthepieceof information"
        );
        res.status(200).json({
          data: result,
          statut: 200,
          success: true,
          message: "login successfully",
          token: token,
        });
      } else {
        res.status(400).json({
          data: "error",
          statut: 400,
          success: false,
          message: "invalid password",
        });
      }
    } else {
      res.status(400).json({
        data: "error",
        statut: 400,
        success: false,
        message: "invalid email",
      });
    }
  },

  getUserdata: async (req, res) => {
    try {
      const showuser = await User.find();
      res.status(200).json({
        userData: showuser,
        statut: 200,
        success: true,
        message: "found data  successfully..",
      });
    } catch (error) {
      res.status(404).json({
        error: error,
        statut: 400,
        success: false,
        message: "Oop! error",
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      const update_data = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        update_data: update_data,
        statut: 200,
        success: true,
        message: "update data  successfully..",
      });
    } catch (error) {
      res.status(404).json({
        error: error,
        statut: 400,
        success: false,
        message: "Oop! error",
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const delete_data = await User.findByIdAndDelete({
        _id: req.params.id,
      });
      res.status(200).json({
        delete_data: delete_data,
        statut: 200,
        success: true,
        message: "delete data successfully..",
      });
    } catch (error) {
      res.status(404).json({
        error: error,
        statut: 400,
        success: false,
        message: "Oop! error",
      });
    }
  },
};
