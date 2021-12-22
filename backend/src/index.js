const express = require("express");
const cors = require("cors")
const {connectDB} = require("./db/db");
const app = express();
const {inmuebles} = require("./routes/inmuebles")
const {usuarios} = require("./routes/usuarios")
connectDB();


app.use(express.json());
app.use(cors());
app.use('/inmuebles', inmuebles);
app.use('/usuarios', usuarios);
app.use(require("./routes/index"));

app.listen("8080");
console.log(`servidor en el puerto`, 8080);








