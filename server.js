const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Guardar último dato
let latestData = { ppm: 0, temperatura: 0, humedad: 0, clase: "Desconocido" };

app.post('/datos', (req, res) => {
    latestData = req.body;
    console.log("Datos recibidos:", latestData); // <<< aquí se verán en la consola
    res.json({ status: "ok" });
});

app.get('/ultimo', (req, res) => {
    res.json(latestData);
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
