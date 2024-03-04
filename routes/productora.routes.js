import {Router} from 'express';

import { 
  crearProductoraHandler,
  editarParcialProductoraHandler,
  editarProductoraHandler,
  eliminarProductoraHandler,
  listarProductorasHandler,
  obtenerProductoraPorIdHandler } 
  from '../handlers/productoraHandlers.js';

import { 
  validarParametroId } 
  from '../middlewares/routesMiddlewares/Common/validarParametroId.js';

import { 
  validarProductoraBody } 
  from '../middlewares/routesMiddlewares/productoraMiddlewares.js';

const productoraRouter = Router();

// Crear Productora
productoraRouter.post("/", validarProductoraBody, crearProductoraHandler);

// Editar Productora
productoraRouter.put("/:id", validarParametroId, validarProductoraBody, editarProductoraHandler);

// Editar parcialmente Productora
productoraRouter.patch("/:id", validarParametroId, editarParcialProductoraHandler);

// Listar Productoras
productoraRouter.get("/lista", listarProductorasHandler);

// Eliminar Productora por id
productoraRouter.delete("/:id", validarParametroId, eliminarProductoraHandler);

// Obtener Genero por id
productoraRouter.get("/:id", validarParametroId, obtenerProductoraPorIdHandler);

export default productoraRouter;  