import React, { useState } from 'react';
import { searchIcon } from '../utils/icons';

const TypeActionButton = ({ resetFilters }) => {
    const [selectedType, setSelectedType] = useState(null);

    const handleTypeClick = (type) => {
        setSelectedType(type === selectedType ? null : type); 
    };

    const handleResetClick = () => {
        setSelectedType(null);
        resetFilters(); 
    };


    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            <div className="fixed-action-btn click-to-toggle direction-top" style={{ marginRight: '70px' }}>
                <a className="btn-floating btn-large red">
                    <i className="material-icons">menu</i>
                </a>
                <ul>
                    <li><a className="btn-floating"><img src={searchIcon('water', selectedType !== 'water')} alt="Water" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('water')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('grass', selectedType !== 'grass')} alt="Grass" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('grass')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('fire', selectedType !== 'fire')} alt="Fire" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('fire')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('bug', selectedType !== 'bug')} alt="Bug" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('bug')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('dark', selectedType !== 'dark')} alt="Dark" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('dark')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('dragon', selectedType !== 'dragon')} alt="Dragon" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('dragon')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('electric', selectedType !== 'electric')} alt="Electric" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('electric')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('fairy', selectedType !== 'fairy')} alt="Fairy" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('fairy')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('fighting', selectedType !== 'fighting')} alt="Fighting" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('fighting')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('flying', selectedType !== 'flying')} alt="Flying" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('flying')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('ghost', selectedType !== 'ghost')} alt="Ghost" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('ghost')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('ground', selectedType !== 'ground')} alt="Ground" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('ground')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('ice', selectedType !== 'ice')} alt="Ice" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('ice')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('normal', selectedType !== 'normal')} alt="Normal" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('normal')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('poison', selectedType !== 'poison')} alt="Poison" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('poison')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('psychic', selectedType !== 'psychic')} alt="Psychic" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('psychic')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('rock', selectedType !== 'rock')} alt="Rock" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('rock')} /></a></li>
                    <li><a className="btn-floating"><img src={searchIcon('steel', selectedType !== 'steel')} alt="Steel" style={{ width: '100%', height: '100%' }} onClick={() => handleTypeClick('steel')} /></a></li>
                </ul>
            </div>

            <div className="fixed-action-btn reset-btn">
                <a className="btn-floating btn-large yellow darken-2" onClick={handleResetClick}>
                    <i className="material-icons">refresh</i>
                </a>
            </div>
        </div>
    );
};


export default TypeActionButton;