import { useState } from "react";

interface AnimalProps {
  animal: string;
}

const Animal = (props: AnimalProps) => {
  const { animal } = props;

  const [hasLike, setHasLike] = useState(false);

  return (
    <div
      className="flex-flex-col gap-4 padding-3 justify-evenly items-center bg-slate-200/50 shadow-lg border-2 border-gray-200/10 p-4 rounded-xl"
      onClick={() => setHasLike(!hasLike)}
    >
      <div className="flex gap-4 justify-between items-baseline flex-grow">
        <img
          src={`/img/${animal}.svg`}
          alt={`A Picture of ${animal}.`}
          className="object-contain rounded-xl w-24 h-24"
        />
        {hasLike && (
          <img
            src={`/img/heart.svg`}
            alt={`A Picture of ${animal}.`}
            className="object-contain rounded-xl w-8 h-8"
          />
        )}
      </div>
      <p className="text-xl text-gray-500 tracking-widest text-center pt-4">
        {animal}
      </p>
    </div>
  );
};

export default Animal;
