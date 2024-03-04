import Genero from "./../../models/Genero.js";

const editarParcialGenero = async(propiedades, id) => {

  let result = await Genero.updateOne(
    {_id: id},
    {$set: propiedades}
  );

  return result;
}

export default editarParcialGenero;