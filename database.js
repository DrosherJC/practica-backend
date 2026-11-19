import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://josebunay_db_user:2Gek5TOlFPLKqkBV@shop.69htfum.mongodb.net/shop');
        console.log('Conectado exitosamente a MongoDB:');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

export default conectarDB;
