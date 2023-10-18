const {Router} = require("express");
const allGetProduct = require("../controllers/allGetProduct")

const router = Router();

router.get("/", async (req ,res)=>{
    const h =allGetProduct()
    res.status(200).send('h')
})

module.exports = router