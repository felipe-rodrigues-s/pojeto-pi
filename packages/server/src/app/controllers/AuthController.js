const bcrypt = require('bcrypt');
//models
const User = require('../models/User');

//helpers
const createUserToken = require('../helpers/create-user-token');

module.exports = class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    //chek if the user exits
    const user = await User.findOne({
      raw: true,
      where: { email },
    });

    if (!user) {
      return res.status(422).json({ message: 'User not found!' });
    }

    //check if the password matches
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({ message: 'The password is incorret!' });
    }
    //creating a user token
    createUserToken(user, req, res);
    return res.status(400).send();
  }
};
