import Director from "../../models/Director.js";
import merge from 'object-mapper';

const editarDirector = async (srcDirector, id) => {
  
  let director = await Director.findById(id);

  if(director != null) {

    let directorActualizado = merge(srcDirector, director, {
      "nombre" : "nombre",
      "estado" : "estado",
    });

    directorActualizado.fechaActualizacion = new Date();

    director = directorActualizado.save();

  }

  return director;

}

export default editarDirector;