import editarParcialTipo from '../controllers/tipoControllers/editarParcialTipo.js';
import editarTipo from '../controllers/tipoControllers/editarTipo.js';
import eliminarTipo from '../controllers/tipoControllers/eliminarTipo.js';
import obtenerTipoPorId from '../controllers/tipoControllers/obtenerTipoPorId.js';
import crearTipo from './../controllers/tipoControllers/crearTipo.js';
import listarTipos from './../controllers/tipoControllers/listarTipos.js';
import { validationResult } from 'express-validator';

// Crear Tipo

export const crearTipoHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcTipo = req.body;

    const nuevoTipo = await crearTipo(srcTipo);
    return res.status(200).json(nuevoTipo);

  }catch(error){

    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar tipo

export const editarTipoHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const srcTipo = req.body;
    const id = req.params.id;

    const tipoActualizado = await editarTipo(srcTipo, id);

    if(!tipoActualizado) {

      return res.status(400).send({error: 'Este Tipo no existe'});

    }

    return res.status(200).send(tipoActualizado);

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});
  }

}

// Obtener toda la lista de tipos

export const listarTiposHandler = async (req, res) => {

  try {

      const tipos = await listarTipos();    
      return res.status(200).json(tipos);
    
  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Eliminar Tipo por id

export const eliminarTipoHandler = async (req, res) => {
  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    
    const {id} = req.params;

    const result = await eliminarTipo(id);

    if(!result.deleted) {
      return res.status(400).send({error: 'Este tipo no existe'});
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Editar parcialmente Tipo

export const editarParcialTipoHandler = async (req, res) => {
  try {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const {id} = req.params;
    const propiedades = req.body;

    const result = await editarParcialTipo(propiedades, id);

    return res.status(200).send(result);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});

  }
}

// Obtener Tipo por id

export const obtenerTipoPorIdHandler = async (req, res) => {

  try {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const {id} = req.params;

    const tipo = await obtenerTipoPorId(id);

    if(!tipo) {
      return res.status(400).send({error: 'No existe este Director'});
    }

    return res.status(200).send(tipo);

  } catch (error) {
    
    console.log(error);
    return res.status(500).json({error: 'Ocurrio un error'});
    
  }

}