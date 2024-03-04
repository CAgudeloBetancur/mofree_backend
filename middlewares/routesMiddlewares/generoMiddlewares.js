import { check } from "express-validator";

export const validarGeneroBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
];