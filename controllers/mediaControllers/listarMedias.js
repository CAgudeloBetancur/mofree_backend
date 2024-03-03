import Media from '../../models/Media.js';

const listarMedias = async () => {

  const medias = await Media.find().populate([
    {
      path: 'generoPrincipal',
      select: 'nombre estado descripcion'
    },
    {
      path: 'directorPrincipal',
      select: 'nombre estado'
    },
    {
      path: 'productora',
      select: 'nombre estado slogan'
    },
    {
      path: 'tipo',
      select: 'nombre descripcion'
    },
  ]);

  return medias;

}

export default listarMedias;