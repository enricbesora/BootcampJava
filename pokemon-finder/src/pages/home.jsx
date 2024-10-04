import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';
import axios from 'axios';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);       // Todos los Pokémon
  const [filteredPokemons, setFilteredPokemons] = useState([]); // Pokémon filtrados
  const [query, setQuery] = useState('');             // Búsqueda actual
  const [offset, setOffset] = useState(0);            // Desplazamiento para la carga de más Pokémon

  // Función para hacer el fetch de los Pokémon
  const fetchPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then(response => {
        const promises = response.data.results.map(pokemon => 
          axios.get(pokemon.url).then(res => res.data)
        );
        
        Promise.all(promises).then(results => {
          const newPokemons = [...pokemons, ...results];
          setPokemons(newPokemons); 
          setFilteredPokemons(newPokemons);  
          setOffset(offset + 20);            
        });
      });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const getQuery = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    if (query === '') {
      setFilteredPokemons(pokemons);  
    } else {
      const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query) || 
        pokemon.id.toString().includes(query)
      );
      setFilteredPokemons(filtered);  
    }
  }, [query, pokemons]);

  return (
    <div className="container">
      <h1 className="center-align">Pokédex</h1>
      <SearchBar getQuery={getQuery} />  {}
      <PokemonGrid pokemons={filteredPokemons} />  {}
      <LoadMoreButton onClick={fetchPokemons} />   {}
    </div>
  );
};

export default Home;
