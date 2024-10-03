import React from 'react';
import PokemonCard from './pokemonCard';

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className="row">
      {pokemons.map((pokemon, index) => (
        <div className="col s12 m6 l4" key={index}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonGrid;
