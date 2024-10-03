import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';

const Home = () => {
    const [pokemons, setPokemons] = useState([]); 
    const [offset, setOffset] = useState(0); 
  
    const fetchPokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
          .then(response => response.json())
          .then(data => {
            const promises = data.results.map(pokemon => 
              fetch(pokemon.url).then(res => res.json())
            );
            
            Promise.all(promises).then(results => {
              setPokemons([...pokemons, ...results]); 
              setOffset(offset + 20); 
            });
          });
      };
  
    useEffect(() => {
      fetchPokemons();
    }, []);
  
    return (
      <div className="container">
        <h1 className="center-align">Pokédex</h1>
        <SearchBar />
        <PokemonGrid pokemons={pokemons} />
        <LoadMoreButton onClick={fetchPokemons} />
      </div>
    );
  };
  
  export default Home;