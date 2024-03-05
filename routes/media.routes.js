import {Router} from 'express';

import { 
  crearMediaHandler,
  listarMediasHandler,
  editarMediaHandler,
  eliminarMediaHandler,
  editarParcialMediaHandler,
  obtenerMediaPorIdHandler } 
  from '../handlers/mediaHandlers.js';

import { 
  validarParametroId } 
  from '../middlewares/routesMiddlewares/Common/validarParametroId.js';

import {
  validarPatchPropsMedia,
  validateMediaBody } 
  from './../middlewares/routesMiddlewares/MediaMiddlewares.js'

const mediaRouter = Router();

// Crear Media
mediaRouter.post("/", validateMediaBody, crearMediaHandler);

// Listar Medias
mediaRouter.get("/lista", listarMediasHandler);

// Obtener Media por id
mediaRouter.get("/:id", validarParametroId, obtenerMediaPorIdHandler);

// Editar Media
mediaRouter.put("/:id", validarParametroId, validateMediaBody, editarMediaHandler);

// Editar parcial media
mediaRouter.patch("/:id", validarParametroId, validarPatchPropsMedia, editarParcialMediaHandler);

// Eliminar Media
mediaRouter.delete("/:id", validarParametroId, eliminarMediaHandler);

export default mediaRouter;