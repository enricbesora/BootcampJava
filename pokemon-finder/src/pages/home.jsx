import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';
import pokemonNamesData from '../assets/pokemonNames.json';
import axios from 'axios';

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]); 
    const [filteredPokemons, setFilteredPokemons] = useState([]); 
    const [query, setQuery] = useState(''); 
    const [offset, setOffset] = useState(0); 
    const [pokemonNames, setPokemonNames] = useState([]); 


    useEffect(() => {
        setPokemonNames(pokemonNamesData.pokemonNames);
    }, []);


    const fetchPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        const data = await response.json();

        const promises = data.results.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        );

        const newPokemons = await Promise.all(promises);
        const updatedAllPokemons = [...allPokemons, ...newPokemons];

        setAllPokemons(updatedAllPokemons);
        setOffset(offset + 20);

        if (query) {
            const newFilteredPokemons = updatedAllPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(query)
            );
            setFilteredPokemons(newFilteredPokemons);
        } else {
            setFilteredPokemons(updatedAllPokemons); 
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemonByName = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();

        setAllPokemons([...allPokemons, pokemon]);
        setFilteredPokemons([...filteredPokemons, pokemon]);
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
            <SearchBar getQuery={handleSearch} pokemons={allPokemons} pokemonNames={pokemonNames} fetchPokemonByName={fetchPokemonByName} /> {/* Pasamos la lista completa de Pokémon */}
            <PokemonGrid pokemons={filteredPokemons} />
            <LoadMoreButton onClick={fetchPokemons} />
        </div>
    );
};

export default Home;
