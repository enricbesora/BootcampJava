import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';
import axios from 'axios';

const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]); // Lista completa de Pokémon
  const [filteredPokemons, setFilteredPokemons] = useState([]); // Pokémon filtrados
  const [query, setQuery] = useState(''); // Búsqueda actual
  const [offset, setOffset] = useState(0); // Desplazamiento para la carga de más Pokémon

  const fetchPokemons = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      const data = await response.json();
      
      const promises = data.results.map(pokemon => 
          fetch(pokemon.url).then(res => res.json())
      );

      const newPokemons = await Promise.all(promises);
      const updatedAllPokemons = [...allPokemons, ...newPokemons];

      setAllPokemons(updatedAllPokemons);
      setOffset(offset + 20);

      if (query) {
          const newFilteredPokemons = updatedAllPokemons.filter(pokemon =>
              pokemon.name.toLowerCase().includes(query)
          );
          setFilteredPokemons(newFilteredPokemons);
      } else {
          setFilteredPokemons(updatedAllPokemons); // Si no hay filtro, mostramos todos
      }
  };

  useEffect(() => {
      fetchPokemons();
  }, []);

  const handleSearch = (q) => {
      setQuery(q);
      if (q.length >= 3) {
          const filtered = allPokemons.filter(pokemon =>
              pokemon.name.toLowerCase().startsWith(q.toLowerCase())
          );
          setFilteredPokemons(filtered); // Actualizamos los Pokémon filtrados
      } else if (q.length === 0) {
          setFilteredPokemons(allPokemons); // Si la query está vacía, mostramos todos los Pokémon
      }
  };

  return (
      <div className="container">
          <h1 className="center-align">Pokédex</h1>
          <SearchBar getQuery={handleSearch} pokemons={allPokemons} /> {/* Pasamos la lista completa de Pokémon */}
          <PokemonGrid pokemons={filteredPokemons} />
          <LoadMoreButton onClick={fetchPokemons} />
      </div>
  );
};

export default Home;
