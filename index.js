const express = require('express');
const app = express();
const port = 3000;

// Ruta 1
app.get('/', (req, res) => {
  res.send('Bienvenidos al API');
});

// Ruta 2
app.get('/mensaje1', (req, res) => {
  res.send('Aquí va el mensaje 1. ¡Hola desde Express!');
});

// Ruta 3
app.get('/mensaje2', (req, res) => {
  res.send('Mensaje 2: tu API ya funciona 😊');
});

// Ruta 4
app.get('/saludar/:msg', (req, res) => {
  res.send(`Hola: ${req.params.msg} 😊`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
