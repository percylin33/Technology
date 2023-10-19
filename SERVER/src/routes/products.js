const {Router} = require("express");
const allGetProduct = require("../controllers/allGetProduct")
const postProduct = require("../controllers/postProduct")
const putProduct = require("../controllers/putProduct")

const router = Router();

router.get("/", async (req ,res)=>{
    const {name} = req.query
    
    try {
        const data = await allGetProduct()
        console.log(data);
    res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})

router.post("/", async (req ,res)=>{
    const {name, almacenamiento, memoria, procesador, resolucion} = req.body;
    try {
        postProduct(name, almacenamiento, memoria, procesador, resolucion)
    res.status(200).send("producto creado")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
router.put("/", async (req ,res)=>{
    const {id, name, almacenamiento, memoria, procesador, resolucion} = req.body;
    try {
        await putProduct(id, name, almacenamiento, memoria, procesador, resolucion)
        
    res.status(200).send("actualizado")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router