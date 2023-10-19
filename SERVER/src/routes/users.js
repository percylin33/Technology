const {Router} = require("express");

const postUser = require("../controllers/postUser")

const router = Router();

router.get("/", async (req ,res)=>{
    res.status(200).send("get")
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