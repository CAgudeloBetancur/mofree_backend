import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearDirectorHandler,
  editarDirectorHandler,
  editarParcialDirectorHandler,
  eliminarDirectorHandler,
  listarDirectoresHandler
} from '../handlers/directorHandlers.js';

const directorRouter = Router();

// Crear Director
directorRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearDirectorHandler);

// Editar Director
directorRouter.put("/:id", [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarDirectorHandler);

// Listar Directores
directorRouter.get("/lista", listarDirectoresHandler);

// Eliminar Director
directorRouter.delete(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  eliminarDirectorHandler);

// Editar parcialmente Director
directorRouter.patch(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  editarParcialDirectorHandler);

export default directorRouter;