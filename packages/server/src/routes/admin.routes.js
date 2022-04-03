const router = require('express').Router();

//controllers
const AdminController = require('../app/controllers/AdminController');

//middlewares
const userFormValidation = require('../app/middleware/validations/register-form-validations');

router.post('/register', userFormValidation, AdminController.register);
module.exports = router;
