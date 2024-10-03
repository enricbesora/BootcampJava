import React from 'react';

import pokeballIcon from '../assets/icons/pokeball.png'; 
import {searchIcon} from '../utils/icons';

const PokemonCard = ({ pokemon }) => {
  const { id, name, sprites, types } = pokemon;
  
  const type = types[0].type.name;
  const backgroundClass = `bg-poke-color-light-${type}`;
  
  return (
    <div className='card' style={{ backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`}}>
     <div className="card-content">
        <div className="card-header">
          <img src={pokeballIcon} alt="Pokéball Icon" className="poke-icon" />
          <span># {id}</span>
          <div className="pokemon-types">
            {types.map((t, index) => (
              <img
                key={index}
                className='card__badge-Icon'
                src={searchIcon(t.type.name)}
                alt={`${t.type.name} type icon`}
              />
            ))}
          </div>
        </div>
        <img src={sprites.front_default} alt={name} className="pokemon-sprite" />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;