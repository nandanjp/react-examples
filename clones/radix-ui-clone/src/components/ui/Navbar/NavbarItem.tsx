import { motion } from "framer-motion";
import { PlusIcon } from "@radix-ui/react-icons";

interface NavbarItemProps {
  text: string;
  hasPlus?: boolean;
}

const NavbarItem = (props: NavbarItemProps) => {
  const { text } = props;
  let { hasPlus } = props;

  hasPlus ??= false;

  return (
    <motion.a
      className="flex flex-row justify-evenly items-center gap-1"
      href={`/${text}`}
      initial={{ x: 0, y: 0, color: "white", opacity: 0.4 }}
      whileHover={{ x: 4, y: -4, color: "white", opacity: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {text}
      {hasPlus ? <PlusIcon /> : null}
    </motion.a>
  );
};

export default NavbarItem;
