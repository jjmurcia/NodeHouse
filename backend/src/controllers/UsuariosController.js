const Usuario = require("../models/Usuario")

const login = (req, res) => {
    req.body.email && req.body.pass ?
        Usuario.findOne({ email: req.body.email }, (err, user) => {
            if (err) return res.send({msg: "Ocurrió un error: " + err})
            if (user) {
                if (user.pass == req.body.pass) {
                    let jwToken = user.generarJWT()
                    return res.send({ msg: "Tienes permisos", token: jwToken })
                }
                return res.send({msg: "Ups!, la contraseña no coincide"})
            }
            return res.send({msg:"El usuario no existe"})
        })
        :
        res.send({msg:"No se está enviando el parametro 'email' o 'pass'"})
}

module.exports = {
    login
}