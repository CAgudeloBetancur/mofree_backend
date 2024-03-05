import {Router} from 'express';

import { 
  crearGeneroHandler,
  editarGeneroHandler,
  editarParcialGeneroHandler,
  eliminarGeneroHandler,
  listarGenerosHandler,
  obtenerGeneroPorIdHandler } 
  from '../handlers/generoHandlers.js';

import { 
  validarParametroId } 
  from '../middlewares/routesMiddlewares/Common/validarParametroId.js';

import { 
  validarGeneroBody, validarPatchPropsGenero } 
  from '../middlewares/routesMiddlewares/generoMiddlewares.js';

const generoRouter = Router();

// Crear Genero
generoRouter.post("/", validarGeneroBody, crearGeneroHandler);

// Editar Genero
generoRouter.put("/:id", validarParametroId, validarGeneroBody, editarGeneroHandler);

// Editar parcialmente Genero
generoRouter.patch("/:id", validarParametroId, validarPatchPropsGenero, editarParcialGeneroHandler);

// Listar Generos
generoRouter.get("/lista", listarGenerosHandler);

// Eliminar Genero por id
generoRouter.delete("/:id", validarParametroId, eliminarGeneroHandler);

// Obtener Genero por id
generoRouter.get("/:id", validarParametroId, obtenerGeneroPorIdHandler);

export default generoRouter;