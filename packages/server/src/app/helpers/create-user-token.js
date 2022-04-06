require('dotenv/config')
const secret = process.env.SECRET
const jwt = require('jsonwebtoken')

const createUserToken = (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user.id
    },
    secret
  )
  return res.status(200).json({
    message: 'Welcome!',
    token,
    userId: user.id,
    isAdmin: user.isAdmin
  })
}

module.exports = createUserToken
