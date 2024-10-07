import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import PokemonGrid from '../components/pokemonGrid';
import LoadMoreButton from '../components/loadMoreButton';
import pokemonNamesData from '../assets/pokemonNames.json';
import axios from 'axios';

const Home = () => {
    const [allPokemons, setAllPokemons] = useState([]); // Lista completa de Pokémon
    const [filteredPokemons, setFilteredPokemons] = useState([]); // Pokémon filtrados
    const [query, setQuery] = useState(''); // Búsqueda actual
    const [offset, setOffset] = useState(0); // Desplazamiento para la carga de más Pokémon
    const [pokemonNames, setPokemonNames] = useState([]); // Nombres de Pokémon cargados localmente


    useEffect(() => {
        // Cargar nombres desde el archivo JSON
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
            setFilteredPokemons(updatedAllPokemons); // Si no hay filtro, mostramos todos
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemonByName = async (name) => {
        // Hacemos fetch del Pokémon por su nombre específico
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();

        setAllPokemons([...allPokemons, pokemon]);
        setFilteredPokemons([...filteredPokemons, pokemon]); // Actualizamos el listado filtrado
    };

    const handleSearch = (q) => {
        setQuery(q);
        const filtered = allPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(q.toLowerCase())
        );
        setFilteredPokemons(filtered); // Filtrado dinámico por cada letra
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
