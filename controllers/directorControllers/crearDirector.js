import Director from '../../models/Director.js';
import merge from 'object-mapper';

const crearDirector = async (srcDirector) => {

  let directorVacio = new Director();
  
  let director = merge(srcDirector, directorVacio, {
      "nombre" : "nombre",
      "estado" : "estado",
    });

  director = await director.save();

  return director;
  
}
export default crearDirector;