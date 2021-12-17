const { Router } = require("express");
const router = Router();

const User = require("../models/Usuario");
const jwt = require("jsonwebtoken");

router.get("/api", (req, res) => res.send("hola mundo"));

router.post("/registro", async (req, res) => {
  // guardamos el usuario en la DB
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();

  // creo el token
  const token = jwt.sign({ _id: newUser._id }, "confidencial");

  // devolvemos el token
  res.status(200).json({ token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).send("el email no existe");
  if (user.password !== password)
    return res.status(401).send("contraseña incorrecta");

  const token = jwt.sign({ _id: user._id }, "confidencial");
  return res.status(200).json({ token });
});

router.get("/tasks", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Tasks One",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 2,
      name: "Tasks two",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 3,
      name: "Tasks Three",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
  ]);
});

router.get("/tasks-private", verifyToken, (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Tasks One",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 2,
      name: "Tasks two",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
    {
      _id: 3,
      name: "Tasks Three",
      description: "lorem ipsum",
      date: "2021/12/10",
    },
  ]);
});

router.get("/profile", verifyToken, (req, res)=> {
  res.send(req.userId);
})

module.exports = router;

function verifyToken(req, res, next) {
  if (!req.headers.autorization) {
    // si no existe datos de autorizacion
    return res.status(401).send("respuesta no autorizada");
  }
  //console.log(req.headers.autorization);

  const token = req.headers.autorization.split(" ")[1];
  if(token === "null"){
    return res.status(401).send("respuesta no autorizada");
  }

  const payload = jwt.verify(token, "confidencial");
  req.userId = payload._id;  // id del usuario

  next();
}
