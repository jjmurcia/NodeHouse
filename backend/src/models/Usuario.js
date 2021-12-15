const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const usuarioSchema = new Schema({
    nombre:{
        type: String
    },
    email:{
        type: String
    },
    pass:{
        type: String
    }
});

usuarioSchema.methods.generarJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        nombre: this.name,
        email: this.email
    },"mongoNode")
}

module.exports = model("Usuario",usuarioSchema,"Username")