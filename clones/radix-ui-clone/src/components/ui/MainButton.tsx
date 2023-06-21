import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface MainButtonProps {
  text: string;
}

const MainButton = (props: MainButtonProps) => {
  const { text } = props;
  return (
    <motion.button
      initial={{ x: 0, y: 0, opacity: 0.7 }}
      whileHover={{ x: 5, y: -5, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="text-white bg-black/80 flex flex-row justify-between items-center gap-4 px-6 py-3 rounded-lg shadow-lg shadow-purple-500/30 border-2 border-pink-400/20"
    >
      {text}
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <ArrowRightIcon />
      </motion.div>
    </motion.button>
  );
};

export default MainButton;
