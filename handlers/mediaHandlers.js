import crearMedia from './../controllers/mediaControllers/crearMedia.js';
import listarMedias from './../controllers/mediaControllers/listarMedias.js';
import editarMedia from './../controllers/mediaControllers/editarMedia.js';
import eliminarMedia from '../controllers/mediaControllers/eliminarMedia.js';
import editarParcialMedia from '../controllers/mediaControllers/editarParcialMedia.js';
import { validationResult } from 'express-validator';
import obtenerMediaPorId from '../controllers/mediaControllers/obtenerMediaPorId.js';

// Crear Productora

export const crearMediaHandler = async (req, res) => {

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      
      return res.status(400).json({message: errors.array()});
    
    }

    const srcMedia = req.body;

    const nuevaMedia = await crearMedia(srcMedia);
    return res.status(200).json(nuevaMedia);

  }catch(error){

    return res.status(500).json({error: error.message});

  }
}

// Listar Medias

export const listarMediasHandler = async (req, res) => {

  try {
    
    const medias = await listarMedias();

    return res.status(200).send(medias);

  } catch (error) {
    
    return res.status(500).send({errors: error.message});

  }

}

// Editar Media

export const editarMediaHandler = async (req, res) => {

  try {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

      return res.status(400).json({error: errors.array()});

    }

    const srcMedia = req.body;
    const id = req.params.id;

    const mediaActualizada = await editarMedia(srcMedia, id);

    if(!mediaActualizada) {

      return res.status(400).send('Esta Media no existe');

    }

    return res.send(mediaActualizada);

  } catch (error) {
    console.log(error);
    return res.status(500).send('Ocurrio un error');

  }

}

// Eliminar media

export const eliminarMediaHandler = async (req, res) => {
  try {
    
    const {id} = req.params;

    const result = await eliminarMedia(id);

    if(!result.deleted) {
      return res.status(400).send('Esta Media no existe');
    }

    res.status(200).json({message: 'Deleted Successfully'});

  } catch (error) {
    
    return res.status(500).send({error: error.message});

  }
}

// Editar parcialmente una Media

export const editarParcialMediaHandler = async (req, res) => {
  try {
    
    const {id} = req.params;
    const propiedades = req.body;

    const result = await editarParcialMedia(propiedades, id);

    return res.status(200).send(result);

  } catch (error) {
    
    return res.status(500).send({error: error.message});

  }
}

// Obtener Media por id

export const obtenerMediaPorIdHandler = async (req, res) => {

  try {
    
    const {id} = req.params;

    const media = await obtenerMediaPorId(id);

    if(!media) {
      return res.status(400).send({error: 'No existe esta Media'});
    }

    return res.status(200).send(media);

  } catch (error) {
    
    return res.status(500).send({error: error.message});
    
  }

}