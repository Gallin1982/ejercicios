const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
    user: 'tu_usuario',
    host: 'localhost',
    database: 'pruebaCrud',
    password: 'tu_contraseña',
    port: 5432,
});

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta para crear un nuevo contacto
app.post('/api/contactos', async (req, res) => {
    const { nombre, telefono } = req.body;

    // Validar que los datos estén presentes
    if (!nombre || !telefono) {
        return res.status(400).json({ error: 'Nombre y teléfono son requeridos' });
    }

    try {
        // Insertar el nuevo contacto en la base de datos
        const result = await pool.query(
            'INSERT INTO contactos (nombre, telefono) VALUES ($1, $2) RETURNING id',
            [nombre, telefono]
        );

        // Retornar el ID del nuevo contacto creado
        res.status(201).json({ id: result.rows[0].id, nombre, telefono });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al guardar el contacto' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
