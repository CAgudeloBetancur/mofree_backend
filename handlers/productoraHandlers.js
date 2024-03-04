import editarParcialProductora from '../controllers/productoraControllers/editarParcialProductora.js';
import eliminarProductora from '../controllers/productoraControllers/eliminarProductora.js';
import listarProductoras from '../controllers/productoraControllers/listarProductoras.js';
import obtenerProductoraPorId from '../controllers/productoraControllers/obtenerProductoraPorId.js';
import crearProductora from './../controllers/productoraControllers/crearProductora.js';
import editarProductora from './../controllers/productoraControllers/editarProductora.js';
import { validationResult } from 'express-validator';

// Crear Productora

export const crearProductoraHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcProductora = req.body;

    const nuevaProductora = await crearProductora(srcProductora);
    return res.status(200).json(nuevaProductora);

  }catch(error){

    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar Productora

export const editarProductoraHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcProductora = req.body;
    const id = req.params.id;

    const productoraActualizada = await editarProductora(srcProductora, id);

    if(!productoraActualizada) {

      return res.status(400).send({error: 'Esta Productora no existe'});

    }

    return res.send(productoraActualizada);

  } catch (error) {

    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }

}

// Listar Productoras

export const listarProductorasHandler = async (req, res) => {
  try {
    
    const productoras = await listarProductoras();

    return res.status(200).send(productoras);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
} 

// Eliminar productora por id

export const eliminarProductoraHandler = async (req, res) => {
  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const result = await eliminarProductora(id);

    if(!result.deleted) {
      return res.status(400).send({error: 'Esta Productora no existe'});
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar parcialmente productora

export const editarParcialProductoraHandler = async (req, res) => {
  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;
    const propiedades = req.body;

    const result = await editarParcialProductora(propiedades, id);

    return res.status(200).send(result);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Obtener Productora por id

export const obtenerProductoraPorIdHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const productora = await obtenerProductoraPorId(id);

    if(!productora) {
      return res.status(400).send({error: 'No existe este Productora'});
    }

    return res.status(200).send(productora);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});
    
  }

}