const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Servir tu index.html desde /public
app.use(express.static(path.join(__dirname, 'public')));

let latestData = { ppm: 0, temperatura: 0, humedad: 0, clase: "Desconocido" };

// ✅ Ruta POST para recibir datos
app.post('/datos', (req, res) => {
    latestData = req.body;
    console.log("Datos recibidos:", latestData);
    res.json({ status: "ok" });
});

// ✅ Ruta GET para enviar datos
app.get('/ultimo', (req, res) => {
    res.json(latestData);
});

// ✅ Levantar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
