import Productora from "../../models/Productora.js";
import merge from 'object-mapper';

const editarProductora = async (srcProductora, id) => {
  
  let productora = await Productora.findById(id);

  if(productora != null) {

    let productoraActualizada = merge(srcProductora, productora, {
      "nombre" : "nombre",
      "estado" : "estado",
      "descripcion" : "descripcion",
      "slogan" : "slogan"
    });

    productoraActualizada.fechaActualizacion = new Date();

    productora = productoraActualizada.save();

  }

  return productora;

}

export default editarProductora;