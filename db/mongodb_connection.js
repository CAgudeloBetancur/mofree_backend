import mongoose from 'mongoose';

export const getConnection = async () => {

  try {
    
    const url = "mongodb+srv://iud_user:RmDJxcmlHfwwjWH1@universidad.rs344pt.mongodb.net/mofree_db?retryWrites=true&w=majority";

    await mongoose.connect(url);

    console.log("Conectado a MongoDb");

  } catch(error) {

    console.log(error);

  }

}