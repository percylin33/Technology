const {Router} = require("express");
const allGetProduct = require("../controllers/allGetProduct")
const postProduct = require("../controllers/postProduct")

const router = Router();

router.get("/", async (req ,res)=>{
    try {
        const data =allGetProduct()
    res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})

router.post("/", async (req ,res)=>{
    const {name, almacenamiento, memoria, procesador, resolucion} = req.body;
    try {
        const data =postProduct(name, almacenamiento, memoria, procesador, resolucion)
    res.status(200).send("useario creado")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
router.put("/", async (req ,res)=>{
    const h =allGetProduct()
    res.status(200).send('h')
})

module.exports = router