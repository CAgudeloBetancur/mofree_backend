import Productora from "./../../models/Productora.js";

const editarParcialProductora = async(propiedades, id) => {

  let result = await Productora.updateOne(
    {_id: id},
    {$set: propiedades}
  );

  return result;
}

export default editarParcialProductora;