import Media from "./../../models/Media.js";
import {ObjectId} from "mongoose";

const editarParcialMedia = async(propiedades, id) => {

  let result = await Media.updateOne(
    {_id: id},
    {$set: propiedades}
  );

  return result;
}

export default editarParcialMedia;