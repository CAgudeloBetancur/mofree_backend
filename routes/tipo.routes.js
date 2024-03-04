import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearTipoHandler,
  listarTiposHandler,
  eliminarTipoHandler,
  editarTipoHandler,
  editarParcialTipoHandler,
  obtenerTipoPorIdHandler
} from '../handlers/tipoHandlers.js';

const tipoRouter = Router();

// Crear Tipo
tipoRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
], crearTipoHandler);

// Editar Tipo
tipoRouter.put("/:id", [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
], editarTipoHandler);

//Editar parcialmente tipo
tipoRouter.patch(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  editarParcialTipoHandler);

// Listar Tipos
tipoRouter.get("/lista", listarTiposHandler);

// Eliminar Tipo
tipoRouter.delete(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  eliminarTipoHandler);

// Obtener Tipo por id
tipoRouter.get(
  "/:id", 
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb'),
  obtenerTipoPorIdHandler);


export default tipoRouter;