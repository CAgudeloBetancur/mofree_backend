import Media from '../../models/Media.js';
import merge from 'object-mapper';

const crearMedia = async (srcMedia) => {

  let mediaVacia = new Media();
  
  let media = merge(srcMedia, mediaVacia, {
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

  media = await media.save();

  return media;
  
}
export default crearMedia;