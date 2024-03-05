import { check, body } from "express-validator";
import Productora from "./../../models/Productora.js";

export const validarProductoraBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty(),
  check('slogan', 'slogan requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
]

export const validarPatchPropsProductora = [
  body('')
    .custom(async (value, {req}) => {
      const productora = new Productora();
      for(let propiedad in req.body) {
        if(!(propiedad in productora)) {
          throw new Error(`La propiedad ${propiedad} no existe en el modelo que quiere actualizar`);
        }         
      }
    }),
]