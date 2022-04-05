const User = require('../models/User');
module.exports = class AdminController {
  static async register(req, res) {
    const { name, email, phone, password, confirmPassword } = req.body;
    //checking if the email is already taken by onether user

    return res.status(200).send();
  }
};
