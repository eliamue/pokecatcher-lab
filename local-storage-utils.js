import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    const pokedex = JSON.parse(stringyPokedex);

    return pokedex;
}

export function setPokedex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(selectedPokemonId) {
    const pokedex = getPokedex();
    
    const matchingPokemon = findById(pokedex, selectedPokemonId)
        ;
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId
        };

        pokedex.push(newItem);
    }
    setPokedex(pokedex);
}


export function capturePokemon(selectedPokemonId) {
    const pokedex = encounterPokemon(selectedPokemonId);
    const matchingPokemon = findById(pokedex, selectedPokemonId);
    matchingPokemon.captured++;
    setPokedex(pokedex);
}