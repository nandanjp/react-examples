type pokemonCardType = {
  name?: string;
  imageSrc?: string;
  abilitiesList?: string;
  movesList?: string;
  height?: number;
  dexNumber?: number;
};

const PokemonCard = (props: pokemonCardType) => {
  let { name, imageSrc, abilitiesList, movesList, height, dexNumber } = props;

  name ??= "unknown";
  imageSrc ??= "/haikyu-1.jpeg";
  abilitiesList ??= "unknown";
  movesList ??= "unknown";
  height ??= 0;
  dexNumber ??= 0;

  return (
    <div className="max-w-sm bg-slate-950 border-gray-700 shadow rounded-lg w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
      <div className="w-full flex flex-col items-center justify-middle">
        <h5 className="mb-2 text-2xl font-bold tracking-light text-blue-500">
          Name
        </h5>
        <p className="mb-3 font-normal text-gray-400">{name}</p>

        <a href="">
          <img src={imageSrc} alt={name} className="rounded-t-lg object-fill" />
        </a>
      </div>
      <p></p>
      <div className="p-3 flex flex-col justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-light text-blue-500">
          Abilities
        </h5>
        <p className="mb-3 font-normal text-gray-400">{abilitiesList}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-light text-blue-500">
          Moves
        </h5>
        <p className="mb-3 font-normal text-gray-400">{movesList}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-light text-blue-500">
          Height
        </h5>
        <p className="mb-3 font-normal text-gray-400">{height}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-light text-blue-500">
          Pokedex #
        </h5>
        <p className="mb-3 font-normal text-gray-400">{dexNumber}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
