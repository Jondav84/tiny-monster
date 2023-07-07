/** @format */

import React from "react";
import Pokedex from "./Pokedex";
import "./styles.css";

const Pokegame = () => {
  const pokemonList = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  const pokeBall1 = [];
  const pokeBall2 = [...pokemonList];

  while (pokeBall1.length < pokeBall2.length) {
    const randomIndex = Math.floor(Math.random() * pokeBall2.length);
    const randomPokemon = pokeBall2.splice(randomIndex, 1)[0];
    pokeBall1.push(randomPokemon);
  }

  const totalExperience1 = pokeBall1.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );
  const totalExperience2 = pokeBall2.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );

  const isHand1Winner = totalExperience1 > totalExperience2;

  return (
    <div className="Pokegame">
      <h2>Ball 1</h2>
      <Pokedex
        pokeBall={pokeBall1}
        isWinner={isHand1Winner}
        totalExperience={totalExperience1}
      />
      <h2>Ball 2</h2>
      <Pokedex
        pokeBall={pokeBall2}
        isWinner={!isHand1Winner}
        totalExperience={totalExperience2}
      />
    </div>
  );
};

export default Pokegame;
