import Media from "./../../models/Media.js";
import Genero  from "../../models/Genero.js";
import Director  from "../../models/Director.js";
import Productora  from "../../models/Productora.js";
import Tipo  from "../../models/Tipo.js";
import { body, check } from "express-validator";

const message = (tipoMsg, id, propiedad) => { // tipoMsg --> 1 = no existe | 2 = existe, pero Inactivo

  const msgP1 = "El _id"
  const msgP2 = "en la propiedad";
  const msgP3 = "no referencia un elemento existente en la base de datos";
  const msgP4 = "referencia un elemento existente, pero Inactivo; solo se admiten elementos Activos"

  return `${msgP1} ${id} ${msgP2} ${propiedad} ${(tipoMsg === 1) ? msgP3 : msgP4}`;
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
      const genero = await Genero.findById({_id: value});
      if(!genero) throw new Error(message(1, value, 'generoPrincipal'));
      if(genero.estado !== 'Activo') throw new Error(message(2, value, 'generoPrincipal'));
    }),
  body('directorPrincipal._id')
    .custom(async value => {
      const director = await Director.findById({_id: value}, 'estado');
      if(!director) throw new Error(message(1, value, 'directorPrincipal'));
      if(director.estado !== 'Activo') throw new Error(message(2, value, 'directorPrincipal'));
    }),
  body('productora._id')
    .custom(async value => {
      const productora = await Productora.findById({_id: value}, 'estado');
      if(!productora) throw new Error(message(1, value, 'productora'));
      if(productora.estado !== 'Activo') throw new Error(message(2, value, 'productora'));
    }),
  body('tipo._id')
    .custom(async value => {
      const tipo = await Tipo.exists({_id: value});
      if(!tipo) throw new Error(message(1, value, 'tipo'));
    })
];

export const validarPatchPropsMedia = [
  body('')
    .custom(async (value, {req}) => {
      const media = new Media();
      for(let propiedad in req.body) {
        if(!(propiedad in media)) {
          throw new Error(`La propiedad ${propiedad} no existe en el modelo que quiere actualizar`);
        }         
      }
    }),
]