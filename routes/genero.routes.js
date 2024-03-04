import {Router} from 'express';
import { check } from 'express-validator';

import { 
  crearGeneroHandler,
  editarGeneroHandler,
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
  check('nombre', 'nombre requerido').not().isEmpty(),
  check('descripcion', 'descripcion requerida').not().isEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarGeneroHandler);

// Listar Generos
generoRouter.get("/lista", listarGenerosHandler);

export default generoRouter;