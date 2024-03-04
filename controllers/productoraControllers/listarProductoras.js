import Productora from '../../models/Productora.js';

const listarProductoras = async () => {

  const productoras = await Productora.find();

  return productoras;

}

export default listarProductoras;