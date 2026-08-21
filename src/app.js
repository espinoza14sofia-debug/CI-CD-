const express = require('express');
const { sumar, restar, multiplicar, dividir, esPrimo } = require('./calculadora');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de demostracion CI/CD - Programacion IV - Universidad Latina de Costa Rica' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/sumar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: sumar(Number(a), Number(b)) });
});

app.post('/restar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: restar(Number(a), Number(b)) });
});

app.post('/multiplicar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: multiplicar(Number(a), Number(b)) });
});

app.post('/dividir', (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ resultado: dividir(Number(a), Number(b)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/primo/:n', (req, res) => {
  res.json({ n: Number(req.params.n), esPrimo: esPrimo(Number(req.params.n)) });
});


if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;
