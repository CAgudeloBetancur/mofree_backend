import crearGenero from './../controllers/generoControllers/crearGenero.js';
import editarGenero from './../controllers/generoControllers/editarGenero.js';
import { validationResult } from 'express-validator';

// Crear Genero

export const crearGeneroHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      
      return res.status(400).json({message: errors.array()});
    
    }

    const srcGenero = req.body;

    const nuevoGenero = await crearGenero(srcGenero);
    return res.status(200).json(nuevoGenero);

  }catch(error){

    return res.status(500).json({error: error.message});

  }
}

// Editar Genero

export const editarGeneroHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

      return res.status(400).json({error: errors.array()});

    }

    const srcGenero = req.body;
    const id = req.params.id;

    const generoActualizado = await editarGenero(srcGenero, id);

    if(!generoActualizado) {

      return res.status(400).send('Este Genero no existe');

    }

    return res.send(generoActualizado);

  } catch (error) {
    console.log(error);
    return res.status(500).send('Ocurrio un error');

  }

}