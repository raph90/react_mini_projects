import React from "react";
import "./Pokecard.css";
// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function padToThree(number) {
  return number <= 999 ? `00${number}`.slice(-3) : number;
}

function Pokecard(props) {
  const { name, id, exp, type } = props;
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>

      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Experience: {exp}</div>
    </div>
  );
}

export default Pokecard;
