const mongoose = require("mongoose")
const connectionString = "mongodb+srv://jjmurcia:1010245775@angularpets.derjz.mongodb.net/SingIn?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Se ha establecido conexión con la base de datos!")
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}