import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ComponentCard, { ComponentCardProps, Image } from "../ui/ComponentCard";
import { useState } from "react";

const componentList: ComponentCardProps[] = [
  {
    type: "Dialog",
    description:
      "With modal and non-modal modes, fine-grained focus control, accessible to screen readers.",
    imageType: Image.Attack,
  },
  {
    type: "Dropdown Menu",
    description:
      "With submenus, checkable items, collision handling, arrow key navigation, and typeahead support.",
    imageType: Image.Chainsaw,
  },
  {
    type: "Popover",
    description:
      "With fine-grained focus control, collision handling, origin-aware and collision-aware animations.",
    imageType: Image.Fate,
  },
  {
    type: "Slider",
    description:
      "Supports keyboard and touch input, step interval, multiple thumbs for value ranges, and RTL direction.",
    imageType: Image.Fire,
  },
  {
    type: "Scroll Area",
    description:
      "Supports custom cross-browser styling while maintaining the browser's native scroll behaviour.",
    imageType: Image.Haikyuu,
  },
  {
    type: "Tabs",
    description:
      "Supports arrow key navigation, horizontal/vertical orientation, controller or uncontrolled.",
    imageType: Image.Howl,
  },
  {
    type: "Accordion",
    description:
      "Supports one or multiple items open at the same time, keyboard navigation, collapse and expand animation.",
    imageType: Image.Pokemon,
  },
  {
    type: "Radio Group",
    description:
      "With arrow key navigation, horizontal/vertical orientation support, controller or uncontrolled.",
    imageType: Image.Jujutsu,
  },
  {
    type: "Toggle Group",
    description:
      "A set of two-state buttons that can be toggled on or off. Supports single and multiple pressed buttons.",
    imageType: Image.Kimi,
  },
  {
    type: "Switch",
    description: "Allows the user to toggle between checked and no checked.",
    imageType: Image.Nier,
  },
];

const variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 200,
    opacity: 0,
  },
};

const HeroComponentCardList = () => {
  const [card, setCard] = useState(0);
  const nextItems = () => {
    if (card === componentList.length - 1) setCard(0);
    else setCard(card + 1);
  };

  const prevItems = () => {
    if (card === 0) setCard(componentList.length - 1);
    else setCard(card - 1);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-8 mt-4 flex-wrap relative">
      <motion.button
        className="absolute left-4 top-2/5 z-50 rounded-full p-4 shadow-md shadow-blue-300/20 text-white"
        onClick={prevItems}
        initial={{ backgroundColor: "gray", opacity: 0.6, y: 0 }}
        whileHover={{ backgroundColor: "black", opacity: 1, y: -4 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <ArrowLeftIcon />
      </motion.button>
      {/* {componentList.map((component, index) => (
        <ComponentCard
          type={component.type}
          description={component.description}
          key={index}
        />
      ))} */}
      <motion.div
        variants={variants}
        animate="animate"
        initial="initial"
        exit="exit"
        key={card}
        className="flex flex-row gap-8 justify-center items-center"
      >
        <ComponentCard
          type={componentList[card].type}
          description={componentList[card].description}
          imageType={componentList[card].imageType}
        />
        <ComponentCard
          type={componentList[card].type}
          description={componentList[card].description}
          imageType={componentList[card].imageType}
        />
        <ComponentCard
          type={componentList[card].type}
          description={componentList[card].description}
          imageType={componentList[card].imageType}
        />
      </motion.div>
      {/* <ComponentCard
        type={componentList[card + 1].type}
        description={componentList[card + 1].description}
        imageType={componentList[card + 1].imageType}
      />
      <ComponentCard
        type={componentList[card + 2].type}
        description={componentList[card + 2].description}
        imageType={componentList[card + 2].imageType}
      /> */}
      <motion.button
        className="absolute right-4 top-2/5 z-50 rounded-full p-4 shadow-md shadow-blue-300/20 text-white"
        onClick={nextItems}
        initial={{ backgroundColor: "gray", opacity: 0.6, y: 0 }}
        whileHover={{ backgroundColor: "black", opacity: 1, y: -4 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <ArrowRightIcon />
      </motion.button>
    </div>
  );
};

export default HeroComponentCardList;
