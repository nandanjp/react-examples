import { useState } from "react";
import Animal from "./Animal";

interface AnimalShowProps {
  getRandomAnimal: () => string;
}

const AnimalShow = (props: AnimalShowProps) => {
  const { getRandomAnimal } = props;

  const [number, setNumber]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  const [animals, setAnimals] = useState<string[]>([]);
  // const [clicked, setClicked] = useState(false);
  // const [clickedText, setClickedText] = useState("Not Clicked Yet");

  // useEffect(() => {
  //   if (clicked) setClickedText("Clicked!");
  //   else setClickedText("Not Clicked");
  // }, [clicked]);

  return (
    <div className="flex flex-col justify-center gap-6 items-center w-full bg-gray-200/50 bg-opacity-10 shadow-2xl rounded-2xl border-2 border-white/50 md:p-16 p-8">
      <button
        className="rounded-md border-0 px-4 py-2 text-blue-400 hover:translate-x-1 hover:-translate-y-2 hover:text-blue-100 transition ease-in-out duration-300 decoration-0 outline-none text-xl bg-gray-700 hover:bg-gray-900"
        onClick={() => {
          setNumber(number + 1);
          setAnimals([...animals, getRandomAnimal()]);
        }}
      >
        Add Animal
      </button>
      <p className="text-xl text-slate-800 p-5 tracking-wider">
        Number of Animals: {number}
      </p>
      <div className="flex flex-row justify-evenly items-center gap-12 flex-wrap flex-grow p-12 shadow-lg bg-slate-200/50 border border-1 border-white/50 rounded-xl ease-in-out duration-500 transition-all md:p-12 p-6">
        {animals.map((animal, index) => (
          <Animal key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalShow;
