const Inmueble = require("../models/Inmueble")

const listAllInmuebles = (req, res) => {
    console.log(req.user)
    Inmueble.find((err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })
}

const listAllBohemiaInmuebles = (req, res)=>{
    Inmueble.find({"direccion":"Bohemia"},(err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })
}

const saveInmueble = (req, res) => {
    let document = req.body;
    Inmueble.find({ "direccion": document.direccion}, (err, inmuebles) => {
        if (err) return res.send(err);
        if (inmuebles.length > 0) {
            res.status(400).send({type:"error",msg:"El documento ya existe!"});
        } else {
            Inmueble.create(req.body).then((data) => {
                console.log(data)
                return res.status(200).send({type:"ok",msg:"Se creó el documento"});
            }).catch(err => {
                console.log(err);
                return res.status(500).send({type:"error", msg: err});
            })
        }
    })
}

const updateInmueble = (req, res) => {
    Inmueble.updateOne({ "direccion": req.query.direccion }, req.body, (err, mongoResponse) => {
        if (err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizó el documento")
    });
}

const updatePriceInmueble = (req, res) => {
    if (req.body.precio) {
        Inmueble.updateOne({ "direccion": req.query.direccion }, { "precio": req.body.precio }, (err, mongoResponse) => {
            if (err) return res.send(err)
            console.log(mongoResponse)
            return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizó el documento")
        });
    }else{
        res.send("No esta el precio en el body!, no se realiza la actualización del precio")
    }
}

const deleteInmueble = (req,res) => {
    Inmueble.deleteOne({ "direccion": req.query.direccion },(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deletedCount == 1 ? res.send("Se eliminó el documento") : res.send("No se eliminó el documento")
    })
}

const searchInmueblesByBranch = (req,res)=>{
    Inmueble.find({"direccion":req.query.direccion},(err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })
}

module.exports = {
    listAllInmuebles,
    saveInmueble,
    updateInmueble,
    updatePriceInmueble,
    deleteInmueble,
    listAllBohemiaInmuebles,
    searchInmueblesByBranch
}