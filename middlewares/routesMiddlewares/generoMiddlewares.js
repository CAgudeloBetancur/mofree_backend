import { check, body } from "express-validator";
import Genero from "../../models/Genero.js";

export const validarGeneroBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
];

export const validarPatchPropsGenero = [
  body('')
    .custom(async (value, {req}) => {
      const genero = new Genero();
      for(let propiedad in req.body) {
        if(!(propiedad in genero)) {
          throw new Error(`La propiedad ${propiedad} no existe en el modelo que quiere actualizar`);
        }         
      }
    }),
]