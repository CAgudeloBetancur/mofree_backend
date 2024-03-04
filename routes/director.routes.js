import {Router} from 'express';
import { check, param } from 'express-validator';

import { 
  crearDirectorHandler,
  editarDirectorHandler,
  editarParcialDirectorHandler,
  eliminarDirectorHandler,
  listarDirectoresHandler,
  obtenerDirectorPorIdHandler
} from '../handlers/directorHandlers.js';

import { 
  validarParametroId 
} from '../middlewares/routesMiddlewares/Common/validarParametroId.js';

import { 
  validarDirectorBody 
} from '../middlewares/routesMiddlewares/directorMiddlewares.js';

const directorRouter = Router();

// Crear Director
directorRouter.post("/", validarDirectorBody, crearDirectorHandler);

// Editar Director
directorRouter.put("/:id", validarParametroId, validarDirectorBody, editarDirectorHandler);

// Listar Directores
directorRouter.get("/lista", listarDirectoresHandler);

// Obtener director por id
directorRouter.get("/:id", validarParametroId, obtenerDirectorPorIdHandler);

// Eliminar Director
directorRouter.delete("/:id", validarParametroId, eliminarDirectorHandler);

// Editar parcialmente Director
directorRouter.patch("/:id", validarParametroId, editarParcialDirectorHandler);

export default directorRouter;