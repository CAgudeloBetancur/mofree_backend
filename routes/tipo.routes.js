import {Router} from 'express';
import { check } from 'express-validator';

import { 
  crearTipoHandler,
  listarTiposHandler
} from '../handlers/tipoHandlers.js';

const tipoRouter = Router();

// Crear Tipo
tipoRouter.post("/", [
    check('nombre', 'nombre requerido').not().isEmpty(),
    check('descripcion', 'descripcion requerida').isEmpty()
  ], crearTipoHandler);

// Listar Tipos
tipoRouter.get("/all", listarTiposHandler)

export default tipoRouter;