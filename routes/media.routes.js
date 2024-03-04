import {Router} from 'express';
import { check, body, param } from 'express-validator';

import { 
  crearMediaHandler,
  listarMediasHandler,
  editarMediaHandler,
  eliminarMediaHandler,
  editarParcialMediaHandler
} from '../handlers/mediaHandlers.js';

import {
  validate_idInReferenceProperties
} from './../middlewares/routesMiddlewares/MediaMiddlewares.js'

const mediaRouter = Router();

const validaciones = [
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
    .withMessage('Debe ser un identificador MongoDb válido')
];

// Crear Media
mediaRouter.post("/", validaciones, validate_idInReferenceProperties, crearMediaHandler);

// Listar Medias
mediaRouter.get("/lista", listarMediasHandler);

// Editar Media
mediaRouter.put("/:id", validaciones, editarMediaHandler);

// Editar parcial media
mediaRouter.patch("/:id", editarParcialMediaHandler);

// Eliminar Media
mediaRouter.delete(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  eliminarMediaHandler
);

export default mediaRouter;