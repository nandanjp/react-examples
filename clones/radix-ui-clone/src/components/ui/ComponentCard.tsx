import { motion } from "framer-motion";

export const enum Image {
  Attack = "/img/attack-on-titan.jpeg",
  Haikyuu = "/img/haikyu.jpeg",
  Kimi = "/img/kimi-no-na-wa.jpeg",
  Pokemon = "/img/pokemon.jpeg",
  Fate = "/img/fate.jpeg",
  Chainsaw = "/img/chainsaw-man.jpeg",
  Howl = "/img/howls-moving-castle.jpeg",
  Nier = "/img/nier-automata.jpeg",
  Fire = "/img/fire-emblem.jpeg",
  Jujutsu = "/img/jujutsu-kaisen.jpeg",
}

export interface ComponentCardProps {
  type: string;
  imageType: Image;
  description: string;
}

const ComponentCard = (props: ComponentCardProps) => {
  const { type, description, imageType } = props;

  return (
    <motion.div
      className="flex flex-col justify-evenly items-start gap-4 max-w-md min-w-[25%]"
      initial={{ x: 0, y: 0 }}
      whileHover={{ x: 5, y: -5 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col gap-4 justify-center items-center text-white min-w-full h-[475px] rounded-lg shadow-lg shadow-white/10 bg-gradient-to-br from-[#045061] to-[#0a4540]">
        <img
          src={imageType}
          alt="image"
          className="object-none rounded-lg h-full mb-1"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 min-w-full">
        <p className="text-white text-md">{type}</p>
        <p className="text-white/40 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default ComponentCard;
