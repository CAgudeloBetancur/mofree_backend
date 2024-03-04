import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearProductoraHandler,
  editarParcialProductoraHandler,
  editarProductoraHandler,
  eliminarProductoraHandler,
  listarProductorasHandler,
  obtenerProductoraPorIdHandler
} from '../handlers/productoraHandlers.js';

const productoraRouter = Router();

// Crear Productora
productoraRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('slogan', 'slogan requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearProductoraHandler);

// Editar Productora
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

// Editar parcialmente Productora
productoraRouter.patch(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  editarParcialProductoraHandler);

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

// Obtener Genero por id
productoraRouter.get(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  obtenerProductoraPorIdHandler);

export default productoraRouter;  