import { Router } from "express";

import tipoRouter from "./tipo.routes.js";
import directorRouter from "./director.routes.js";
import generoRouter from "./genero.routes.js";
import productoraRouter from "./productora.routes.js";
import mediaRouter from "./media.routes.js";

const router = Router();

router.use('/tipo', tipoRouter);
router.use('/director', directorRouter);
router.use('/genero', generoRouter);
router.use('/productora', productoraRouter);
router.use('/media', mediaRouter);

export default router;