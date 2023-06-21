import {
  DiscordLogoIcon,
  FigmaLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  NotionLogoIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const enum Company {
  Notion = 0,
  Discord,
  Instagram,
  LinkedIn,
  Figma,
  Vercel,
  GitHub,
}

interface CompanyLogoProps {
  company: Company;
}

const CompanyLogo = (props: CompanyLogoProps) => {
  const { company } = props;
  let Icon;
  switch (company) {
    case Company.Notion:
      Icon = <NotionLogoIcon />;
      break;
    case Company.Discord:
      Icon = <DiscordLogoIcon />;
      break;
    case Company.Instagram:
      Icon = <InstagramLogoIcon />;
      break;
    case Company.LinkedIn:
      Icon = <LinkedInLogoIcon />;
      break;
    case Company.Figma:
      Icon = <FigmaLogoIcon />;
      break;
    case Company.Vercel:
      Icon = <VercelLogoIcon />;
      break;
    default:
      Icon = <DiscordLogoIcon />;
      break;
  }

  return (
    <motion.div
      className="text-white fill-white p-4"
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {Icon}
    </motion.div>
  );
};

export default CompanyLogo;
