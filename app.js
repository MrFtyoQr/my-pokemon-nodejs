// app.js
const express = require('express');
const pokemonRouter = require('./routes/pokemonRouter');

const app = express();
app.use(express.json());

// Registramos el router para la ruta /pokemon (o /api/pokemon si prefieres)
app.use('/pokemon', pokemonRouter);

module.exports = app;
