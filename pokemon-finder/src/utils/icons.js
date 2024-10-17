import bug from '../assets/icons/pokemon/types/bug.png';
import dark from '../assets/icons/pokemon/types/dark.png';
import dragon from '../assets/icons/pokemon/types/dragon.png';
import electric from '../assets/icons/pokemon/types/electric.png';
import fairy from '../assets/icons/pokemon/types/fairy.png';
import fighting from '../assets/icons/pokemon/types/fighting.png';
import fire from '../assets/icons/pokemon/types/fire.png';
import flying from '../assets/icons/pokemon/types/flying.png';
import ghost from '../assets/icons/pokemon/types/ghost.png';
import grass from '../assets/icons/pokemon/types/grass.png';
import ground from '../assets/icons/pokemon/types/ground.png';
import ice from '../assets/icons/pokemon/types/ice.png';
import normal from '../assets/icons/pokemon/types/normal.png';
import poison from '../assets/icons/pokemon/types/poison.png';
import psychic from '../assets/icons/pokemon/types/psychic.png';
import rock from '../assets/icons/pokemon/types/rock.png';
import steel from '../assets/icons/pokemon/types/steel.png';
import water from '../assets/icons/pokemon/types/water.png';
import bugGray from '../assets/icons/pokemon/types/bug-gray.png';
import darkGray from '../assets/icons/pokemon/types/dark-gray.png';
import dragonGray from '../assets/icons/pokemon/types/dragon-gray.png';
import electricGray from '../assets/icons/pokemon/types/electric-gray.png';
import fairyGray from '../assets/icons/pokemon/types/fairy-gray.png';
import fightingGray from '../assets/icons/pokemon/types/fighting-gray.png';
import fireGray from '../assets/icons/pokemon/types/fire-gray.png';
import flyingGray from '../assets/icons/pokemon/types/flying-gray.png';
import ghostGray from '../assets/icons/pokemon/types/ghost-gray.png';
import grassGray from '../assets/icons/pokemon/types/grass-gray.png';
import groundGray from '../assets/icons/pokemon/types/ground-gray.png';
import iceGray from '../assets/icons/pokemon/types/ice-gray.png';
import normalGray from '../assets/icons/pokemon/types/normal-gray.png';
import poisonGray from '../assets/icons/pokemon/types/poison-gray.png';
import psychicGray from '../assets/icons/pokemon/types/psychic-gray.png';
import rockGray from '../assets/icons/pokemon/types/rock-gray.png';
import steelGray from '../assets/icons/pokemon/types/steel-gray.png';
import waterGray from '../assets/icons/pokemon/types/water-gray.png';

const icons = {
   bug: bug,
   dark: dark, 
   dragon: dragon,
   electric: electric,
   fairy: fairy,
   fighting: fighting,
   fire: fire,
   flying: flying,
   ghost: ghost,
   grass: grass,
   ground: ground,
   ice: ice,
   normal: normal, 
   poison: poison,
   psychic: psychic,
   rock: rock,
   steel: steel, 
   water: water
};

const grayIcons = {
   bug: bugGray,
   dark: darkGray, 
   dragon: dragonGray,
   electric: electricGray,
   fairy: fairyGray,
   fighting: fightingGray,
   fire: fireGray,
   flying: flyingGray,
   ghost: ghostGray,
   grass: grassGray,
   ground: groundGray,
   ice: iceGray,
   normal: normalGray, 
   poison: poisonGray,
   psychic: psychicGray,
   rock: rockGray,
   steel: steelGray, 
   water: waterGray
};

export function searchIcon(type, isGray = false) {
   const iconsSet = isGray ? grayIcons : icons;
   return iconsSet[type] || null;
}
