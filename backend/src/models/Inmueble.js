const {Schema, model} = require("mongoose");

const inmuebleSchema = new Schema({
    tipo:{
        type: String
    },
    precio:{
        type: Number
    },
    habitaciones:{
        type: Number
    },
    ciudad:{
        type: String
    },
    localidad: {
        type: String
    },
    direccion: {
        type: String
    }
});

module.exports = model("Inmueble",inmuebleSchema,"inmuebles")