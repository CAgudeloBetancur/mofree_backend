import { check } from "express-validator";

export const validarTipoBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
];