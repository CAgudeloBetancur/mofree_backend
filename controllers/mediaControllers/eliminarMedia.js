import Media from './../../models/Media.js';

const eliminarMedia = async (id) => {

  let mediaEliminado = await Media.findByIdAndDelete(id);

  return (mediaEliminado != null) ? {deleted: true} : {deleted: false};

}

export default eliminarMedia;