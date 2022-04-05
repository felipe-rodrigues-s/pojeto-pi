//models
const User = require('../models/User');
const Admin = require('../models/Admin');

//helper
const createHash = require('../helpers/create-hash');
const createUser = require('../helpers/create-user');
const createUserToken = require('../helpers/create-user-token')

module.exports = class AdminController {
  static async register(req, res) {
    const { name, email, phone, password, confirmPassword } = req.body;
    const user = await createUser(req);

    if (user) {
      const { id } = user.dataValues;
      const buildAdmin = new Admin({
        userId: id,
      });
      const admin = await buildAdmin.save();
      //logging int the user
      createUserToken(user.dataValues, req, res)
      return res.status(201).send();
    }
  }
};
