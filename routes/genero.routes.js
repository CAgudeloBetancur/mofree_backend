import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearGeneroHandler,
  editarGeneroHandler,
  editarParcialGeneroHandler,
  eliminarGeneroHandler,
  listarGenerosHandler,
  obtenerGeneroPorIdHandler
} from '../handlers/generoHandlers.js';

const generoRouter = Router();

// Crear Genero
generoRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearGeneroHandler);

// Editar Genero
generoRouter.put("/:id", [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarGeneroHandler);

// Editar parcialmente Genero
generoRouter.patch(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  editarParcialGeneroHandler);

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

// Obtener Genero por id
generoRouter.get(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  obtenerGeneroPorIdHandler);

export default generoRouter;