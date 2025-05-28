const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener imagen de perrito
app.get('/dog', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    res.json({ image: response.data.message });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching dog image' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://52.90.66.135:${PORT}`);
});
