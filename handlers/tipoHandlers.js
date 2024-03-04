import editarTipo from '../controllers/tipoControllers/editarTipo.js';
import eliminarTipo from '../controllers/tipoControllers/eliminarTipo.js';
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

// Editar tipo

export const editarTipoHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

      return res.status(400).json({error: errors.array()});

    }

    const srcTipo = req.body;
    const id = req.params.id;

    const tipoActualizado = await editarTipo(srcTipo, id);

    if(!tipoActualizado) {

      return res.status(400).send('Este Tipo no existe');

    }

    return res.status(200).send(tipoActualizado);

  } catch (error) {
    console.log(error);
    return res.status(500).send('Ocurrio un error');

  }

}

// Obtener toda la lista de tipos

export const listarTiposHandler = async (req, res) => {

  try {

      const tipos = await listarTipos();    
      return res.status(200).json(tipos);
    
  } catch (error) {
    
    return res.status(500).json({error : error.message});

  }
}

// Eliminar Tipo por id

export const eliminarTipoHandler = async (req, res) => {
  try {
    
    const {id} = req.params;

    const result = await eliminarTipo(id);

    if(!result.deleted) {
      return res.status(400).send('Este tipo no existe');
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    return res.status(500).send({error: error.message});

  }
}