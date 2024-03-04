import Genero  from "../../models/Genero.js";
import Director  from "../../models/Director.js";
import Productora  from "../../models/Productora.js";
import Tipo  from "../../models/Tipo.js";
import { body, check } from "express-validator";

const message = (id, propiedad) => {
  const msgP1 = "en la propiedad";
  const msgP2 = "no referencia un elemento existente en la base de datos";
  return `El _id ${id} ${msgP1} ${propiedad} ${msgP2}`;
}

export const validateMediaBody = [
  check('serial', 'serial requerido').notEmpty(),
  check('titulo', 'titulo requerido').notEmpty(),
  check('sinopsis', 'sinopsis requerida').notEmpty(),
  check('urlPelicula', 'urlPelicula requerido').notEmpty(),
  check('urlImagen', 'urlImagen requerido').notEmpty(),
  check('fechaEstreno', 'fechaEstreno requerido').notEmpty()
    .isISO8601()
    .withMessage('fechaEstreno debe estar en formato (YYYY-MM-DD) y ser válida'),
  check('generoPrincipal', 'generoPrincipal requerido').notEmpty(),
  check('directorPrincipal', 'directorPrincipal requerido').notEmpty(),
  check('productora', 'productora requerida').notEmpty(),
  check('tipo', 'tipo requerido').notEmpty(),
  body('**._id')
    .notEmpty()
    .withMessage('Un identificador (_id) es requerido')
    .isMongoId()
    .withMessage('Debe ser un identificador MongoDb válido'),
  body('generoPrincipal._id')
    .custom(async value => {
      const existeGenero = await Genero.exists({_id: value});
      if(!existeGenero) throw new Error(message(value, 'generoPrincipal'));
    }),
  body('directorPrincipal._id')
    .custom(async value => {
      const existeDirector = await Director.exists({_id: value});
      if(!existeDirector) throw new Error(message(value, 'directorPrincipal'));
    }),
  body('productora._id')
    .custom(async value => {
      const existeProductora = await Productora.exists({_id: value});
      if(!existeProductora) throw new Error(message(value, 'productora'));
    }),
  body('tipo._id')
    .custom(async value => {
      const existeTipo = await Tipo.exists({_id: value});
      if(!existeTipo) throw new Error(message(value, 'tipo'));
    })
];