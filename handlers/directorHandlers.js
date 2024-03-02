import crearDirector from './../controllers/directorControllers/crearDirector.js';
import editarDirector from './../controllers/directorControllers/editarDirector.js';
import { validationResult } from 'express-validator';

// Crear Director

export const crearDirectorHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      
      return res.status(400).json({message: errors.array()});
    
    }

    const srcDirector = req.body;

    const nuevoDirector = await crearDirector(srcDirector);
    return res.status(200).json(nuevoDirector);

  }catch(error){

    return res.status(500).json({error: error.message});

  }
}

// Editar Director

export const editarDirectorHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

      return res.status(400).json({error: errors.array()});

    }

    const srcDirector = req.body;
    const id = req.params.id;

    const directorActualizado = await editarDirector(srcDirector, id);

    if(!directorActualizado) {

      return res.status(400).send('Este director no existe');

    }

    return res.send(directorActualizado);

  } catch (error) {
    console.log(error);
    return res.status(500).send('Ocurrio un error');

  }

}