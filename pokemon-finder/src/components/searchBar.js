import React from 'react';

const SearchBar = () => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input type="text" id="search" placeholder="Search Pokémon..." />
      </div>
    </div>
  );
};

export default SearchBar;