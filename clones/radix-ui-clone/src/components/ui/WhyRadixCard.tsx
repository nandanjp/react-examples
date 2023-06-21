import { motion } from "framer-motion";

interface WhyRadixCardProps {
  title: string;
  description: string;
}

const WhyRadixCard = (props: WhyRadixCardProps) => {
  const { title, description } = props;

  return (
    <motion.div
      className="flex flex-col justify-start items-start max-w-md min-w-[40%] gap-4 p-6 min-h-full h-72 rounded-lg"
      initial={{ x: 0, y: 0, background: "transparent", opacity: 0.8 }}
      whileHover={{ x: 5, y: -7, background: "gray", opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <p className="text-xl font-bold tracking-wider text-white">{title}</p>
      <p className="text-lg tracking-wide text-white/80">{description}</p>
    </motion.div>
  );
};

export default WhyRadixCard;
