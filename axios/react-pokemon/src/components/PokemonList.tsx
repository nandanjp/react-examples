import { useState } from "react";

import getPokemon from "../requests/pokemonRequest";
import PokemonCard from "./PokemonCard";

type PokemonListType = {
  pokemon: string[];
};

const PokemonList = (props: PokemonListType) => {
  // const pokemon: string[] = [
  //   "charizard",
  //   "diancie",
  //   "excadrill",
  //   "garchomp",
  //   "greninja",
  //   "heatran",
  //   "jirachi",
  //   "tapu-bulu",
  //   "victini",
  //   "tyranitar",
  //   "zapdos",
  // ];
  // const pokemon: string[] = ["charizard", "garchomp"];
  const { pokemon } = props;

  const [pokemonCards, setPokemonCards] = useState(new Array<JSX.Element>());

  const retrieveMons = async () => {
    const cards: JSX.Element[] = [];
    for (const mon of pokemon) {
      const res = await getPokemon(mon);
      const { name, abilitiesList, height, moveList, sprites, id } = res;
      cards.push(
        <PokemonCard
          name={name}
          abilitiesList={abilitiesList}
          movesList={moveList}
          height={height}
          imageSrc={sprites.front_default}
          key={id}
        />
      );
    }
    setPokemonCards(cards);
  };

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-12 items-center justify-center place-items-center">
      {pokemonCards.length > 0
        ? pokemonCards
        : [
            <PokemonCard key={1} />,
            <PokemonCard key={2} />,
            <PokemonCard key={3} />,
            <PokemonCard key={4} />,
          ]}
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => retrieveMons()}
      >
        Button
      </button>
    </div>
  );
};

export default PokemonList;
