// app/services/pokemonService.js
const axios = require('axios');

class PokemonService {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getPokemon(pokemon) {
    try {
      const response = await axios.get(`${this.baseUrl}/${pokemon}`);
      if (response.status !== 200) {
        return { error: `HTTP error: ${response.status}` };
      }

      const data = response.data;

      // Filtrar los datos relevantes
      const pokemonInfo = {
        Nombre: data.name,
        Altura: data.height,
        'Experiencia Base': data.base_experience,
        Habilidades: data.abilities.map(ability => ability.ability.name),
        Movimientos: data.moves.slice(0, 5).map(move => move.move.name)
      };

      return pokemonInfo;
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = PokemonService;
