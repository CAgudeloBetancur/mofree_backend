import Media  from "./../../models/Media.js";
import Genero  from "./../../models/Genero.js";
import Director  from "./../../models/Director.js";
import Productora  from "./../../models/Productora.js";
import Tipo  from "./../../models/Tipo.js";
import { validationResult } from "express-validator";  

// Obtiene el nombre de una variable como string
const varToString = varObj => Object.keys(varObj)[0];

// Construye el mensaje de error
const message = (id, objetoPropiedad) => {
  const msgP1 = "en la propiedad";
  const msgP2 = "no referencia un elemento existente en la base de datos";
  return {
    path: `${varToString(objetoPropiedad)}._id`,
    value: id,
    message: `El _id ${id} ${msgP1} ${varToString(objetoPropiedad)} ${msgP2}`
  }
}

// Valida que un _id de una propiedad de la request corresponda a un elemento en la base de datos
export const validate_idInReferenceProperties = async (req, res, next) => {

  if (req.method === 'POST') {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // Si hay errores, envía una respuesta con los mensajes de error
        return res.status(400).json({ errors: errors.array() });
      }

      const mediaRequest = req.body;

      const errorsArr = [];

      const {
        generoPrincipal,
        directorPrincipal,
        productora,
        tipo
      } = mediaRequest;

      const [existeGenero, existeDirector, existeProductora, existeTipo] = await Promise.all([
        Genero.exists({_id: generoPrincipal._id}),
        Director.exists({_id: directorPrincipal._id}),
        Productora.exists({_id: productora._id}),
        Tipo.exists({_id: tipo._id})
      ])

      if(!existeGenero) errorsArr.push(message(generoPrincipal._id, {generoPrincipal}));
      if(!existeDirector) errorsArr.push(message(directorPrincipal._id, {directorPrincipal}));
      if(!existeProductora) errorsArr.push(message(productora._id, {productora}));
      if(!existeTipo) errorsArr.push(message(tipo._id, {tipo}));

      if(errorsArr.length > 0) {
        return res.status(400).send({errors: errorsArr});
      }

    }
    
    next();
};