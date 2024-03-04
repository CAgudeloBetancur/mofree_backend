import { check } from "express-validator";

export const validarProductoraBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('slogan', 'slogan requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
]