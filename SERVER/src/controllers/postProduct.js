
const {Product} = require("../db")

const postProduct = async (name, almacenamiento, memoria, procesador, resolucion) => {
   await Product.create({name, almacenamiento, memoria, procesador, resolucion})
    console.log("esta");
 
}
module.exports = postProduct;   