// import functions
import { capturePokemon, encounterPokemon } from './local-storage-utils.js';
import rawPokeData from './pokemon.js';

//grab DOM elements
const button = document.querySelector('#catch');
const radio1 = document.querySelector('#poke1');
const radio2 = document.querySelector('#poke2');
const radio3 = document.querySelector('#poke3');
const img1 = document.querySelector('#poke-img1');
const img2 = document.querySelector('#poke-img2');
const img3 = document.querySelector('#poke-img3');
// initialize state
renderThreePokemon();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;
    capturePokemon(selectedPokemonId);

    renderThreePokemon();
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function getRandomPokemon() {

    const randomIndex = Math.floor(Math.random() * rawPokeData.length);

    const randomPokemon = rawPokeData[randomIndex];

    return randomPokemon;
}

function renderThreePokemon() {

    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    while (
        poke1.id === poke2.id || 
        poke1.id === poke3.id || 
        poke2.id === poke3.id
    ) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }
    encounterPokemon(poke1.id);
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);

    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;

    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
}