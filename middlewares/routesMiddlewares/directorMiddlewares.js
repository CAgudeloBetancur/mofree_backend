import { check } from "express-validator";

export const validarDirectorBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
];