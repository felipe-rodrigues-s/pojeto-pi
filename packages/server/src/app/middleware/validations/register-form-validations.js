const validator = require('validator');

const userFormValidation = (req, res, next) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  if (!name) {
    return res.status(422).json({ message: 'The name is required!' });
  } else {
    let newName = name.replaceAll(/\s/g, '');
    if (newName.length < 4)
      return res
        .status(422)
        .json({ message: 'The name must have at lest 4 characters!' });
  }

  if (!email) {
    return res.status(422).json({ message: 'The email is requered!' });
  } else if (!validator.isEmail(email)) {
    return res.status(422).json({ message: 'Insert a valid email!' });
  }

  if (!phone) {
    return res.status(422).json({ message: 'The phone number is requered!' });
  } else if (!validator.isMobilePhone(phone)) {
    return res.status(422).json({ message: 'Insert a valid phone number!' });
  }

  if (!password) {
    return res.status(422).json({ message: 'The password is requered!' });
  } else {
    let newPassword = password.replaceAll(/\s/g, '');
    if (newPassword.length < 6)
      return res
        .status(422)
        .json({ message: 'The password must have at lest 6 characters!' });
  }

  if (password != confirmPassword) {
    return res.status(422).json({ message: 'The password dont match!' });
  }

  next();
};

module.exports = userFormValidation;
