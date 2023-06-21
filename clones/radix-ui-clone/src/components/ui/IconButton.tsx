import { motion } from "framer-motion";
import { SunIcon } from "@radix-ui/react-icons";

const IconButton = () => {
  return (
    <motion.button
      className="outline-none p-3 rounded-lg bg-white/20"
      initial={{ opacity: 0.3, x: 0, y: 0 }}
      whileHover={{
        opacity: 1,
        x: 5,
        y: -5,
      }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <SunIcon />
    </motion.button>
  );
};

export default IconButton;
