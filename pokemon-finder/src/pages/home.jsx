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
    const [selectedType, setSelectedType] = useState(null);


    useEffect(() => {
        setPokemonNames(pokemonNamesData.pokemonNames);
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'right',
            hoverEnabled: false,
        });
    }, []);


    const fetchPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=102&offset=${offset}`);
        const data = await response.json();
    
        const promises = data.results.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        );
    
        const newPokemons = await Promise.all(promises);
    
        const updatedAllPokemons = [...allPokemons, ...newPokemons];
    
        updatedAllPokemons.sort((a, b) => a.id - b.id);
    
        setAllPokemons(updatedAllPokemons);
        setOffset(offset + 102);
    
        applyFilters(updatedAllPokemons, query, selectedType);
    };

    const applyFilters = (pokemons, searchQuery, type) => {
        let filtered = pokemons;

        if (searchQuery) {
            filtered = filtered.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (type) {
            filtered = filtered.filter(pokemon =>
                pokemon.types.some(pokemonType => pokemonType.type.name === type) // Filtrar por tipo
            );
        }

        filtered.sort((a, b) => a.id - b.id);
        setFilteredPokemons(filtered);
    };


    const resetFilters = () => {
        setQuery('');
        setSelectedType(null);
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
        applyFilters(allPokemons, q, selectedType);
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        applyFilters(allPokemons, query, type);
    };

    return (
        <div className="container">
            <h1 className="center-align">Pokédex</h1>
            <SearchBar getQuery={handleSearch} pokemons={allPokemons} pokemonNames={pokemonNames} fetchPokemonByName={fetchPokemonByName} clearSearch={clearSearch} /> 
            <PokemonGrid pokemons={filteredPokemons} />
            <LoadMoreButton onClick={fetchPokemons} />
            <TypeActionButton resetFilters={resetFilters} onTypeSelect={handleTypeSelect} />
        </div>
    );
};

export default Home;
