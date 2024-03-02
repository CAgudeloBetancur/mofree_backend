import {Router} from 'express';
import { check } from 'express-validator';

import { 
  crearProductoraHandler,
  editarProductoraHandler
} from '../handlers/productoraHandlers.js';

const productoraRouter = Router();

// Crear Productora
productoraRouter.post("/", [
  check('nombre', 'nombre requerido').not().isEmpty(),
  check('descripcion', 'descripcion requerida').not().isEmpty(),
  check('slogan', 'slogan requerido').not().isEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], crearProductoraHandler);

// Editar Genero
productoraRouter.put("/:id", [
  check('nombre', 'nombre requerido').not().isEmpty(),
  check('descripcion', 'descripcion requerida').not().isEmpty(),
  check('slogan', 'slogan requerido').not().isEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
], editarProductoraHandler);

export default productoraRouter;  