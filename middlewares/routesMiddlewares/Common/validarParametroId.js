import { param } from "express-validator";

export const validarParametroId = [
  param('id')
    .notEmpty()
    .withMessage('El parámetro id es obligatorio')
    .isMongoId()
    .withMessage('El parámetro id debe ser un id válido para MongoDb')
]