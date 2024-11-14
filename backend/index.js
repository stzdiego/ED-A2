const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json()); // Agregar esta línea para parsear el cuerpo de las solicitudes JSON
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({
        ok: true
    });
});

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});