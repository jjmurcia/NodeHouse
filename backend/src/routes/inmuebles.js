const express = require("express");
const {listAllInmuebles, saveInmueble, updateInmueble, updatePriceInmueble, deleteInmueble, listAllBohemiaInmuebles, searchInmueblesByBranch} = require("../controllers/InmuebleController")
const {verificarToken} = require('../middleware/verificarToken')


const inmuebles = express.Router();

inmuebles.use(verificarToken)

inmuebles.get('/', listAllInmuebles);
inmuebles.get('/bohemia', listAllBohemiaInmuebles);
inmuebles.get('/searchBranch', searchInmueblesByBranch);
inmuebles.post('/', saveInmueble);
inmuebles.put('/', updateInmueble);
inmuebles.patch('/price', updatePriceInmueble);
//inmuebles.patch('/stock', updateStockGuitar);
inmuebles.delete('/', deleteInmueble);

module.exports = {
    inmuebles
}