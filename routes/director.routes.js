import {Router} from 'express';

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
  validarDirectorBody, validarPatchPropsDirector 
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
directorRouter.patch("/:id", validarParametroId, validarPatchPropsDirector, editarParcialDirectorHandler);

export default directorRouter;