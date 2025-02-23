// routes/pokemonRouter.js
const express = require('express');
const router = express.Router();
const PokemonBLL = require('../app/bll/pokemonBLL');

// Instanciamos la capa de negocio
const pokemonBLL = new PokemonBLL();

router.get('/:pokemon', async (req, res) => {
  try {
    console.log("Aquí entro al enrutador de Pokémon");
    const { pokemon } = req.params;
    console.log("ruta: /" + pokemon);

    // Llamamos a la capa de negocio
    const result = await pokemonBLL.getPokemon(pokemon);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
