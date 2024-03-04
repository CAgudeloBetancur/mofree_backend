import editarParcialGenero from '../controllers/generoControllers/editarParcialGenero.js';
import eliminarGenero from '../controllers/generoControllers/eliminarGenero.js';
import listarGeneros from '../controllers/generoControllers/listarGeneros.js';
import obtenerGeneroPorId from '../controllers/generoControllers/obtenerGeneroPorId.js';
import crearGenero from './../controllers/generoControllers/crearGenero.js';
import editarGenero from './../controllers/generoControllers/editarGenero.js';
import { validationResult } from 'express-validator';

// Crear Genero

export const crearGeneroHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcGenero = req.body;

    const nuevoGenero = await crearGenero(srcGenero);
    return res.status(200).json(nuevoGenero);

  }catch(error){

    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar Genero

export const editarGeneroHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcGenero = req.body;
    const id = req.params.id;

    const generoActualizado = await editarGenero(srcGenero, id);

    if(!generoActualizado) {

      return res.status(400).send({error: 'Este Genero no existe'});

    }

    return res.send(generoActualizado);

  } catch (error) {

    console.log(error);
    return res.status(500).send({error: 'Ocurrio un error'});

  }

}

// Listar Generos

export const listarGenerosHandler = async (req, res) => {

  try {
    
    const generos = await listarGeneros();

    return res.status(200).send(generos);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }

}

// Eliminar Genero por id

export const eliminarGeneroHandler = async (req, res) => {
  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const result = await eliminarGenero(id);

    if(!result.deleted) {
      return res.status(400).send({error: 'Este genero no existe'});
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar parcialmente Genero

export const editarParcialGeneroHandler = async (req, res) => {
  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;
    const propiedades = req.body;

    const result = await editarParcialGenero(propiedades, id);

    return res.status(200).send(result);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Obtener Genero por id

export const obtenerGeneroPorIdHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const genero = await obtenerGeneroPorId(id);

    if(!genero) {
      return res.status(400).send({error: 'No existe este Director'});
    }

    return res.status(200).send(genero);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});
    
  }

}