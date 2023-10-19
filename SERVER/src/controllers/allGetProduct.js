//const allProductHandler = require("../handlers/allProductHandler")

const {Product} = require("../db")

    
const allGetProduct = async () => {
    const allProduct =  await Product.findAll()
    
 return allProduct;
}
module.exports = allGetProduct;