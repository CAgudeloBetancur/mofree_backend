import { check, body } from "express-validator";
import Tipo from "./../../models/Tipo.js";

export const validarTipoBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('descripcion', 'descripcion requerida').notEmpty()
];

export const validarPatchPropsTipo = [
  body('')
    .custom(async (value, {req}) => {
      const tipo = new Tipo();
      for(let propiedad in req.body) {
        if(!(propiedad in tipo)) {
          throw new Error(`La propiedad ${propiedad} no existe en el modelo que quiere actualizar`);
        }         
      }
    }),
]