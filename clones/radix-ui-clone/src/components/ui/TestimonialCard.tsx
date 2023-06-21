import { CodeIcon, CubeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  company: string;
  testimonial: string;
  userName: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { company, testimonial, userName } = props;

  return (
    <motion.div
      className="min-w-[40%] max-w-xl py-4 px-8 flex flex-col justify-evenly items-start gap-4 rounded-lg shadow-lg shadow-white/10 bg-opacity-20 bg-gray-800 text-white h-72 min-h-full"
      initial={{ x: 0, y: 0, opacity: 0.7 }}
      whileHover={{ x: 5, y: -7, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="flex flex-row justify-start items-center gap-2">
        <CodeIcon />
        <p className="text-2xl tracking-wider font-bold">{company}</p>
      </div>
      <p className="text-md tracking-wide opacity-80">"{testimonial}"</p>
      <div className="flex flex-row justify-start items-center gap-4">
        <CubeIcon />
        <p className="text-gray-600 tracking-wider text-lg">{userName}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
