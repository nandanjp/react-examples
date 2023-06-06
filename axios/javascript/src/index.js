// const axios = require("axios").default;
const root = document.getElementById("root");

async function createPokemon(pokemon) {
  try {
    const options = {
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      params: {},
      headers: {},
    };
    const { data } = await axios.request(options);
    root.appendChild(new Pokemon(data));
  } catch (error) {
    console.log(error);
  }
}

(async function (pokemon) {
  try {
    for (const mon of pokemon) {
      await createPokemon(mon);
    }
  } catch (error) {
    console.log(error);
  }
})([
  "garchomp",
  "greninja",
  "infernape",
  "charizard",
  "empoleon",
  "gallade",
  "gardevoir",
  "dialga",
  "arceus",
  "darkrai",
  "lugia",
  "groudon",
  "rayquaza",
  "yveltal",
  "xerneas",
]);
