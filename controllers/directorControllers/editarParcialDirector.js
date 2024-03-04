import Director from "./../../models/Director.js";

const editarParcialDirector = async(propiedades, id) => {

  let result = await Director.updateOne(
    {_id: id},
    {$set: propiedades}
  );

  return result;
}

export default editarParcialDirector;