const express = require("express")
const LoginController = require("../controller/LoginController")

const router = express.Router();

router.get("/", LoginController.login)
router.post("/", LoginController.logado)


module.exports = router