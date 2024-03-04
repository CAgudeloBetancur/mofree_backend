import listarProductoras from '../controllers/productoraControllers/listarProductoras.js';
import crearProductora from './../controllers/productoraControllers/crearProductora.js';
import editarProductora from './../controllers/productoraControllers/editarProductora.js';
import { validationResult } from 'express-validator';

// Crear Productora

export const crearProductoraHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      
      return res.status(400).json({message: errors.array()});
    
    }

    const srcProductora = req.body;

    const nuevaProductora = await crearProductora(srcProductora);
    return res.status(200).json(nuevaProductora);

  }catch(error){

    return res.status(500).json({error: error.message});

  }
}

// Editar Productora

export const editarProductoraHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

      return res.status(400).json({error: errors.array()});

    }

    const srcProductora = req.body;
    const id = req.params.id;

    const productoraActualizada = await editarProductora(srcProductora, id);

    if(!productoraActualizada) {

      return res.status(400).send('Esta Productora no existe');

    }

    return res.send(productoraActualizada);

  } catch (error) {
    console.log(error);
    return res.status(500).send('Ocurrio un error');

  }

}

// Listar Productoras

export const listarProductorasHandler = async (req, res) => {
  try {
    
    const productoras = await listarProductoras();

    return res.status(200).send(productoras);

  } catch (error) {
    
    return res.status(500).send({error: error.message})

  }
} 