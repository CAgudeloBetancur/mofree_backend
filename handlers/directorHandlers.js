import editarParcialDirector from '../controllers/directorControllers/editarParcialDirector.js';
import eliminarDirector from '../controllers/directorControllers/eliminarDirector.js';
import obtenerDirectorPorId from '../controllers/directorControllers/obtenerDirectorPorId.js';
import crearDirector from './../controllers/directorControllers/crearDirector.js';
import editarDirector from './../controllers/directorControllers/editarDirector.js';
import listarDirectores from './../controllers/directorControllers/listarDirectores.js';
import { validationResult } from 'express-validator';

// Crear Director

export const crearDirectorHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcDirector = req.body;

    const nuevoDirector = await crearDirector(srcDirector);
    return res.status(200).json(nuevoDirector);

  }catch(error){

    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar Director

export const editarDirectorHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcDirector = req.body;
    const id = req.params.id;

    const directorActualizado = await editarDirector(srcDirector, id);

    if(!directorActualizado) {
      return res.status(400).send('Este director no existe');
    }

    return res.send(directorActualizado);

  } catch (error) {

    console.log(error);
    return res.status(500).send({error: 'Ocurrio un error'});

  }

}

// Lista de Directores

export const listarDirectoresHandler = async (req, res) => {

  try {
    
    const directores = await listarDirectores();

    return res.status(200).send(directores);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }

}

// Eliminar Director por id

export const eliminarDirectorHandler = async (req, res) => {
  try {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const {id} = req.params;

    const result = await eliminarDirector(id);

    if(!result.deleted) {
      return res.status(400).send({error: 'Esta Media no existe'});
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar parcialmente Director

export const editarParcialDirectorHandler = async (req, res) => {
  try {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const {id} = req.params;
    const propiedades = req.body;

    const result = await editarParcialDirector(propiedades, id);

    if(result.matchedCount === 0) return res.status(400).json({error: 'Este Director no Existe'});

    if(!result.acknowledged) return res.status(400).json({error: 'No existe la propiedad indicada'});

    return res.status(200).send(result);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Obtener Director por id

export const obtenerDirectorPorIdHandler = async (req, res) => {

  try {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const director = await obtenerDirectorPorId(id);

    if(!director) {
      return res.status(400).send({error: 'No existe este Director'});
    }

    return res.status(200).send(director);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});
    
  }

}