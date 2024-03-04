import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearGeneroHandler,
  editarGeneroHandler,
  eliminarGeneroHandler,
  listarGenerosHandler
} from '../handlers/generoHandlers.js';

const generoRouter = Router();

// Crear Genero
generoRouter.post("/", [
  check('nombre', 'nombre requerido').not().isEmpty(),
  check('descripcion', 'descripcion requerida').not().isEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearGeneroHandler);

// Editar Genero
generoRouter.put("/:id", [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  check('nombre', 'nombre requerido').not().isEmpty(),
  check('descripcion', 'descripcion requerida').not().isEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarGeneroHandler);

// Listar Generos
generoRouter.get("/lista", listarGenerosHandler);

// Eliminar Genero por id
generoRouter.delete(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  eliminarGeneroHandler);

export default generoRouter;