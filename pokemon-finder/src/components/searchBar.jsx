import React, { useState } from 'react';

const SearchBar = ({ getQuery, pokemons}) => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  const onChange = (q) => {
    setText(q);
    const lower = q.toLowerCase();
    
    if (lower.length >= 3) {
        const filteredSuggestions = pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().startsWith(lower)
        );
        setSuggestions(filteredSuggestions);
    } else {
        setSuggestions([]);
    }

    getQuery(lower);
};

const handleSuggestionClick = (suggestion) => {
    setText(suggestion.name);
    setSuggestions([]);
    getQuery(suggestion.name.toLowerCase()); 
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
                    {suggestions.map((pokemon) => (
                        <li key={pokemon.id} onClick={() => handleSuggestionClick(pokemon)}>
                            {pokemon.name}
                        </li>
                    ))}
                </ul>
            )}
    </section>
  );
};

export default SearchBar;