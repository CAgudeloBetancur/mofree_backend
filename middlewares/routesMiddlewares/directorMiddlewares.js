import { check, body } from "express-validator";
import Director from "../../models/Director.js";

export const validarDirectorBody = [
  check('nombre', 'nombre requerido').notEmpty(),
  check('estado', 'estado no valido').isIn(['Activo', 'Inactivo'])
];

export const validarPatchPropsDirector = [
  body('')
    .custom(async (value, {req}) => {
      const director = new Director();
      for(let propiedad in req.body) {
        if(!(propiedad in director)) {
          throw new Error(`La propiedad ${propiedad} no existe en el modelo que quiere actualizar`);
        }         
      }
    }),
]