const LoginController = {
    login: (req, res)=>{
        res.render("login")
    },
    logado: (req, res)=>{
        res.send("usuario logado")
    }
}
module.exports = LoginController;


