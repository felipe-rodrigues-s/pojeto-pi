const router = require('express').Router();

//controllers
const AdminController = require('../app/controllers/AdminController');

//middlewares
const admiRegisterFormValidations = require('../app/middleware/validations/Admin-register-form-validations');

router.post('/register', admiRegisterFormValidations, AdminController.register);
module.exports = router;
