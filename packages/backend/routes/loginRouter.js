const express = require("express")
const LoginController = require("../controllers/LoginController")

const router = express.Router();

router.get("/", LoginController.login)
router.post("/log", LoginController.logado)


module.exports = router