/** @format */

import React from "react";
import Pokecard from "./Pokecard";
import "./styles.css";

const Pokedex = ({ pokeBall, isWinner }) => {
  return (
    <div>
      <div className="Pokedex">
        {pokeBall.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
      {isWinner && <p className="winner-message">THIS HAND WINS!</p>}
    </div>
  );
};
export default Pokedex;
