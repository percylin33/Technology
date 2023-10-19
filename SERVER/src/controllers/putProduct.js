const {Product} = require("../db")

const putProduct = async (id, name, almacenamiento, memoria, procesador, resolucion) => {
    const result = await Product.update({
        name:name,
        almacenamiento:almacenamiento, 
        memoria:memoria, 
        procesador:procesador, 
        resolucion:resolucion
   },
   {
       where:{
        id:id,
       }
   }
   )

   if (result[0] ===1) {
    console.log('Registro actualizado con éxito');
   } else {
    console.log('No se pudo actualizar el registro, asegúrate de que el ID sea válido.');
   }
    
 

}
module.exports = putProduct;