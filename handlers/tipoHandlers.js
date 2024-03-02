import crearTipo from './../controllers/tipoControllers/crearTipo.js';
import listarTipos from './../controllers/tipoControllers/listarTipos.js';
import { validationResult } from 'express-validator';

// Crear Tipo

export const crearTipoHandler = async (req, res) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    
    return res.status(400).json({message: errors.array()});
  
  }

  const srcTipo = req.body;

  try{

    const nuevoTipo = await crearTipo(srcTipo);
    return res.status(200).json(nuevoTipo);

  }catch(error){

    return res.status(500).json({error: error.message});

  }
}

// Obtener toda la lista de usuarios

export const listarTiposHandler = async (req, res) => {

  try {

      const tipos = await listarTipos();    
      return res.status(200).json(tipos);
    
  } catch (error) {
    
    return res.status(500).json({error : error.message});

  }
}