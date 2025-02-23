// app/data_access/pokemonDataAccess.js
const PokemonService = require('../services/pokemonService');

class PokemonDataAccess {
  constructor() {
    // Inyectamos la capa de servicio
    this.pokemonService = new PokemonService();
  }

  async fetchPokemon(pokemon) {
    console.log("Recibimos request de business; haremos el request a la infraestructura");
    const result = await this.pokemonService.getPokemon(pokemon);
    console.log(result);
    return result;
  }
}

module.exports = PokemonDataAccess;
