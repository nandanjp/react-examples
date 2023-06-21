import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export interface FooterListItemProps {
  title: string;
  footerItems: { name: string; external?: boolean }[];
}

const FooterListItem = (props: FooterListItemProps) => {
  const { title, footerItems } = props;
  return (
    <div className="flex flex-col justify-start items-start gap-3 px-4 py-2 self-baseline">
      <p className="text-white text-md font-semibold px-3">{title}</p>
      {footerItems.map((item, index) => {
        const { name } = item;
        let { external } = item;
        external ??= false;

        return (
          <motion.a
            href={`/${name}`}
            className="flex justify-evenly items-center gap-3 decoration-transparent no-underline rounded-md px-3 py-1"
            initial={{
              background: "transparent",
              color: "gray",
              x: 0,
              y: 0,
              opacity: 0.5,
            }}
            whileHover={{
              background: "gray",
              color: "white",
              x: 4,
              y: -4,
              opacity: 0.9,
            }}
            transition={{ duration: 0.4, type: "spring" }}
            key={index}
          >
            {name}
            {external ? <ArrowTopRightIcon /> : null}
          </motion.a>
        );
      })}
    </div>
  );
};

export default FooterListItem;
