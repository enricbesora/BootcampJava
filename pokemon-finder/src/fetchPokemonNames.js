const fs = require('fs');
const axios = require('axios');

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

const fetchAllPokemonNames = async () => {
  try {
    const response = await axios.get(apiUrl);
    const pokemonNames = response.data.results.map(pokemon => pokemon.name);

    const data = {
      pokemonNames: pokemonNames
    };

    fs.writeFileSync('./assets/pokemonNames.json', JSON.stringify(data, null, 2));
    
    console.log('Archivo pokemonNames.json guardado con éxito');
  } catch (error) {
    console.error('Error al obtener los nombres de los Pokémon:', error);
  }
};

fetchAllPokemonNames();
