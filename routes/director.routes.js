import {Router} from 'express';
import { check } from 'express-validator';

import { 
  crearDirectorHandler,
  editarDirectorHandler
} from '../handlers/directorHandlers.js';

const directorRouter = Router();

// Crear Director
directorRouter.post("/", [
    check('nombre', 'nombre requerido').not().isEmpty(),
    check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
  ], crearDirectorHandler);

// Editar Director
directorRouter.put("/:id", [
    check('nombre', 'nombre requerido').not().isEmpty(),
    check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
  ], editarDirectorHandler);

export default directorRouter;