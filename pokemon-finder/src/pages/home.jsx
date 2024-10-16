import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';
import pokemonNamesData from '../assets/pokemonNames.json';
import TypeActionButton from '../components/TypeActionButton';
import M from 'materialize-css';

import axios from 'axios';

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]); 
    const [filteredPokemons, setFilteredPokemons] = useState([]); 
    const [query, setQuery] = useState(''); 
    const [offset, setOffset] = useState(0); 
    const [pokemonNames, setPokemonNames] = useState([]); 
    const [clearSearch, setClearSearch] = useState(false);


    useEffect(() => {
        setPokemonNames(pokemonNamesData.pokemonNames);
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'top',
            hoverEnabled: false,
        });
    }, []);


    const fetchPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        const data = await response.json();
    
        const promises = data.results.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        );
    
        const newPokemons = await Promise.all(promises);
    
        const updatedAllPokemons = [...allPokemons, ...newPokemons];
    
        updatedAllPokemons.sort((a, b) => a.id - b.id);
    
        setAllPokemons(updatedAllPokemons);
        setOffset(offset + 20);
    
        if (query) {
            const newFilteredPokemons = updatedAllPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(query)
            );
    
            newFilteredPokemons.sort((a, b) => a.id - b.id);
            setFilteredPokemons(newFilteredPokemons);
        } else {
            setFilteredPokemons(updatedAllPokemons); 
        }
    };


    const resetFilters = () => {
        setQuery('');
        setFilteredPokemons(allPokemons); 
        setClearSearch(true); 

        setTimeout(() => {
            setClearSearch(false);
        }, 100);
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemonByName = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();

        const updatedAllPokemons = [...allPokemons, pokemon];
        const updatedFilteredPokemons = [...filteredPokemons, pokemon];

        updatedAllPokemons.sort((a, b) => a.id - b.id);
        updatedFilteredPokemons.sort((a, b) => a.id - b.id);

        setAllPokemons(updatedAllPokemons);
        setFilteredPokemons(updatedFilteredPokemons);
    };

    const handleSearch = (q) => {
        setQuery(q);
        const filtered = allPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(q.toLowerCase())
        );
        setFilteredPokemons(filtered); 
    };

    return (
        <div className="container">
            <h1 className="center-align">Pokédex</h1>
            <SearchBar getQuery={handleSearch} pokemons={allPokemons} pokemonNames={pokemonNames} fetchPokemonByName={fetchPokemonByName} clearSearch={clearSearch} /> 
            <PokemonGrid pokemons={filteredPokemons} />
            <LoadMoreButton onClick={fetchPokemons} />
            <TypeActionButton resetFilters={resetFilters} />
        </div>
    );
};

export default Home;
