import Media from "../../models/Media.js";
import merge from 'object-mapper';

const editarMedia = async (srcMedia, id) => {
  
  let media = await Media.findById(id);

  if(media != null) {

    let mediaActualizada = merge(srcMedia, media, {
      "serial" : "serial",
      "titulo" : "titulo",
      "sinopsis" : "sinopsis",
      "urlPelicula" : "urlPelicula",
      "urlImagen" : "urlImagen",
      "fechaEstreno" : "fechaEstreno",
      "generoPrincipal._id" : "generoPrincipal",
      "directorPrincipal._id" : "directorPrincipal",
      "productora._id" : "productora",
      "tipo._id" : "tipo"
    });

    mediaActualizada.fechaActualizacion = new Date();

    media = mediaActualizada.save();

  }

  return media;

}

export default editarMedia;