import PokemonList from "./components/PokemonList";

function App() {
  const pokemon: string[] = [
    "charizard",
    "diancie",
    "excadrill",
    "garchomp",
    "greninja",
    "heatran",
    "jirachi",
    "tapu-bulu",
    "victini",
    "tyranitar",
    "zapdos",
  ];
  // const pokemon: string[] = ["charizard", "jirachi"];
  // const pokemon: string[] = ["charizard"];

  return (
    <>
      <div>
        <h1 className="text-blue-500 text-5xl text-center p-5">
          Pokemon API App: Using React Now!
        </h1>
        <PokemonList pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
