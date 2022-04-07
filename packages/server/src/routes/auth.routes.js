const router = require('express').Router();

//controllers
const AuthController = require('../app/controllers/AuthController');

//middlewares
const userFormLoginValidation = require('../app/middleware/validations/login-form-validations');

router.post('/login', userFormLoginValidation, AuthController.login);
module.exports = router;
