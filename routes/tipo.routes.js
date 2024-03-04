import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearTipoHandler,
  listarTiposHandler,
  eliminarTipoHandler
} from '../handlers/tipoHandlers.js';

const tipoRouter = Router();

// Crear Tipo
tipoRouter.post("/", [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
], crearTipoHandler);

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

export default tipoRouter;