import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex justify-evenly items-center gap-1 cursor-pointer"
      initial={{ x: 0, y: 0 }}
      whileHover={{ x: 4, y: -4 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        view-box="0 0 35 35"
        fill="none"
        className="fill-white"
      >
        <path d="M17 35C10.3726 35 5 30.0751 5 24C5 17.9249 10.3726 13 17 13L17 35Z" />
        <rect x="5" width="12" height="12" />
        <circle cx="24" cy="6" r="6" />
      </svg>
      <span className="text-white/90 text-2xl font-semibold tracking-tight">
        Radix Clone
      </span>
    </motion.div>
  );
};

export default Logo;
