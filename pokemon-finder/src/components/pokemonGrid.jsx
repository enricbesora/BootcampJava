import React from 'react';
import PokemonCard from './pokemonCard';

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className="row">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <div className="col s12 m6 l4" key={index}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))
      ) : (
        <div className="col s12">
          <p className="center-align">No Pokémon found</p>
        </div>
      )}
    </div>
  );
};

export default PokemonGrid;
