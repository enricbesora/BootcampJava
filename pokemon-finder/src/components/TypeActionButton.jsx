import React from 'react';
import { searchIcon } from '../utils/icons';

const TypeActionButton = () => {
    return (
        <div className="fixed-action-btn click-to-toggle direction-top">
            <a className="btn-floating btn-large red">
                <i className="material-icons">menu</i>
            </a>
            <ul>
                <li><a className="btn-floating"><img src={searchIcon('water')} alt="Water" style={{ width: '100%', height: '100%' }} /></a></li>
                <li><a className="btn-floating"><img src={searchIcon('grass')} alt="Grass" style={{ width: '50%', height: '50%' }} /></a></li>
                <li><a className="btn-floating orange"><img src={searchIcon('fire')} alt="Fire" style={{ width: '50%', height: '50%' }} /></a></li>
            </ul>
        </div>
    );
};

export default TypeActionButton;