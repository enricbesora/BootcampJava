import React, { useState } from 'react';

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    const lower = q.toLowerCase();
    getQuery(lower);
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
    </section>
  );
};

export default SearchBar;