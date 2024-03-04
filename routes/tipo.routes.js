import {Router} from 'express';

import { 
  crearTipoHandler,
  listarTiposHandler,
  eliminarTipoHandler,
  editarTipoHandler,
  editarParcialTipoHandler,
  obtenerTipoPorIdHandler } 
  from '../handlers/tipoHandlers.js';

import { 
  validarParametroId } 
  from '../middlewares/routesMiddlewares/Common/validarParametroId.js';

import { 
  validarTipoBody } 
  from '../middlewares/routesMiddlewares/tipoMiddlewares.js';

const tipoRouter = Router();

// Crear Tipo
tipoRouter.post("/", validarTipoBody, crearTipoHandler);

// Editar Tipo
tipoRouter.put("/:id", validarParametroId, validarTipoBody, editarTipoHandler);

//Editar parcialmente tipo
tipoRouter.patch("/:id", validarParametroId, editarParcialTipoHandler);

// Listar Tipos
tipoRouter.get("/lista", listarTiposHandler);

// Eliminar Tipo
tipoRouter.delete("/:id", validarParametroId, eliminarTipoHandler);

// Obtener Tipo por id
tipoRouter.get("/:id", validarParametroId, obtenerTipoPorIdHandler);


export default tipoRouter;