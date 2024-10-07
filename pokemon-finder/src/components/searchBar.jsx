import React, { useState } from 'react';

const SearchBar = ({ getQuery, pokemons, pokemonNames, fetchPokemonByName}) => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  const onChange = (q) => {
    setText(q);
    const lower = q.toLowerCase();
    
    if (lower.length >= 3) {
        const filteredSuggestions = pokemonNames.filter(name => 
            name.toLowerCase().startsWith(lower)
        );
        setSuggestions(filteredSuggestions);
    } else {
        setSuggestions([]);
    }

    getQuery(lower);
};

const handleSuggestionClick = (suggestion) => {
    setText(suggestion);
    setSuggestions([]);
    const pokemonExists = pokemons.some(pokemon => pokemon.name === suggestion);

    if (!pokemonExists) {
        fetchPokemonByName(suggestion.toLowerCase());
    }
    getQuery(suggestion.toLowerCase()); 
};

  return (
    <section className='search-bar row'>
      <form>
        <input
          type='text'
          className='form-control input-field col s12'
          placeholder='Search Pokémon...'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((name,index) => (
                        <li key={index} onClick={() => handleSuggestionClick(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
    </section>
  );
};

export default SearchBar;