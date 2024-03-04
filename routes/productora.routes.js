import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearProductoraHandler,
  editarProductoraHandler,
  eliminarProductoraHandler,
  listarProductorasHandler
} from '../handlers/productoraHandlers.js';

const productoraRouter = Router();

// Crear Productora
productoraRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('slogan', 'slogan requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearProductoraHandler);

// Editar Genero
productoraRouter.put("/:id", [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('slogan', 'slogan requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarProductoraHandler);

// Listar Productoras
productoraRouter.get("/lista", listarProductorasHandler);

// Eliminar Productora por id
productoraRouter.delete(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  eliminarProductoraHandler);

export default productoraRouter;  