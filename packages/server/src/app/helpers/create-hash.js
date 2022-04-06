const bcrypt = require('bcrypt');

const createHash = async (req) => {
  const { password } = req.body;
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

module.exports = createHash;
