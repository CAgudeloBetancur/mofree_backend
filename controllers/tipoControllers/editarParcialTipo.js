import Tipo from "./../../models/Tipo.js";

const editarParcialTipo = async(propiedades, id) => {

  let result = await Tipo.updateOne(
    {_id: id},
    {$set: propiedades}
  );

  return result;
}

export default editarParcialTipo;