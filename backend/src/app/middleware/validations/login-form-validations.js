const validator = require('validator');
const User = require('../../models/User');

const loginFormLoginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ message: 'The email is requered!' });
  } else if (!validator.isEmail(email)) {
    return res.status(422).json({ message: 'Insert a valid email!' });
  }

  if (!password) {
    return res.status(422).json({ message: 'The password is requered!' });
  }

  next();
};

module.exports = loginFormLoginValidation;
