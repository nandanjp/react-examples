import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface BasicLinkProps {
  text: string;
}

const BasicLink = (props: BasicLinkProps) => {
  const { text } = props;

  return (
    <motion.a
      href="/"
      className="no-underline text-md tracking-wide capitalize text-white rounded-lg px-4 py-2 flex flex-row gap-4 justify-start items-center"
      initial={{ opacity: 0.6, x: 0, y: 0, background: "transparent" }}
      whileHover={{ opacity: 1, x: 4, y: -4, background: "gray" }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {text}
      <motion.div
        initial={{ opacity: 0.6, x: 0 }}
        whileHover={{ opacity: 1, x: 6 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <ArrowRightIcon />
      </motion.div>
    </motion.a>
  );
};

export default BasicLink;
