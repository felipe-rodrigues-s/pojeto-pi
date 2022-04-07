//models
const User = require('../models/User');

//helper
const createHash = require('./create-hash');

const createUser = async (req) => {
  const { name, email, phone, password } = req.body;
  //hashing the password
  let buildUser = {};

  if (req.originalUrl === '/admins/register') {
    buildUser = new User({
      name,
      email,
      phone,
      password,
      isAdmin: true,
    });
  } else {
    buildUser = new User({
      name,
      email,
      phone,
      password,
    });
  }

  const user = await buildUser.save();
  return user;
};

module.exports = createUser;
