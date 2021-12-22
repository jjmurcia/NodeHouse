const {Schema, model} = require("mongoose");

const inmuebleSchema = new Schema({
    tipo:{
        type: String
    },
    marca:{
        type: String
    },
    precio:{
        type: Number
    },
    stock:{
        type: Number
    },
    modelo: {
        type: String
    }
});

module.exports = model("Inmueble",inmuebleSchema,"inmuebles")