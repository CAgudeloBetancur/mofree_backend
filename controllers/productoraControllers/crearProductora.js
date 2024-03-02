import Productora from '../../models/Productora.js';
import merge from 'object-mapper';

const crearProductora = async (srcProductora) => {

  let productoraVacia = new Productora();
  
  let productora = merge(srcProductora, productoraVacia, {
      "nombre" : "nombre",
      "estado" : "estado",
      "descripcion" : "descripcion",
      "slogan" : "slogan"
  });

  productora = await productora.save();

  return productora;
  
}
export default crearProductora;