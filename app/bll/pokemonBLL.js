// app/bll/pokemonBLL.js
const PokemonDataAccess = require('../data_access/pokemonDataAccess');

class PokemonBLL {
  constructor() {
    // Inyectamos la capa de acceso a datos
    this.pokemonDataAccess = new PokemonDataAccess();
  }

  async getPokemon(pokemon) {
    console.log("El enrutador nos mandó al business y vamos a llamar al data access");
    const result = await this.pokemonDataAccess.fetchPokemon(pokemon);
    console.log(result);
    return result;
  }
}

module.exports = PokemonBLL;
