import express from 'express';
import mongoose from 'mongoose';
import conectarDB from './database.js';

const app = express();
const PORT = 3000;

app.use(express.json());

conectarDB();

const { Schema } = mongoose;

const productoSchema = new Schema({
    foto: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    talla: { type: Number, required: true },
    cantidad: { type: Number, required: true }
});

const Producto = mongoose.model('Producto', productoSchema);

app.post('/producto', async (req, res) => {
    try {
        const { foto, titulo, descripcion, precio, talla, cantidad } = req.body;

        if ( !titulo || precio === undefined || talla === undefined || cantidad === undefined) {
            return res.status(400).json({
                mensaje: "Faltan campos obligatorios"
            });
        }

        const nuevoProducto = new Producto({
            foto,
            titulo,
            descripcion,
            precio,
            talla,
            cantidad
        });

        const productoGuardado = await nuevoProducto.save();

        return res.status(201).json({
            mensaje: "Producto guardado correctamente",
            id: productoGuardado._id
        });

} catch (error) {
        console.error("Error al guardar:", error);
        return res.status(500).json({
            mensaje: "Error interno al guardar el producto",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});