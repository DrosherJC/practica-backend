import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shop');
        console.log('Conectado exitosamente a MongoDB:');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

export default conectarDB;