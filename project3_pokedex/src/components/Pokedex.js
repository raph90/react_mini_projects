import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex(props) {
    let title = props.isWinner ? <h1 className="Pokedex-winner">Winning Hand</h1> : <h1 className="Pokedex-loser">Losing Hand</h1>

  return (
    <div className="Pokedex">
      {title}
      <h4>Total experience: {props.exp}</h4>
      <div className="Pokedex-cards">
        {props.pokemon.map(pokemon => {
          return (
            <Pokecard
              id={pokemon.id}
              type={pokemon.type}
              exp={pokemon.base_experience}
              name={pokemon.name}
              key={pokemon.name}
            />
          );
        })}
      </div>
    </div>
  );
}

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
};
export default Pokedex;
