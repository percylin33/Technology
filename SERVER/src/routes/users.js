const {Router} = require("express");

const postUser = require("../controllers/postUser");
const login = require("../controllers/login");

const router = Router();

router.post("/login", async (req ,res)=>{
    const {correo, password, type} = req.body;
    if (!correo || password) {
        res.status(400).send({status:"Error", message:"Los campos astan incompletos"})
    }
    const resul = login(correo, password, type)
    res.status(200).json({resul})
})

router.post("/", async (req ,res)=>{
    const {correo, password, type} = req.body;
    postUser(correo, password, type)

    res.status(200).send("Usuario creado")
})

router.put("/", async (req ,res)=>{
    res.status(200).send("get")
})

module.exports = router