import Logo from "../Navbar/Logo";
import FooterListItem, { FooterListItemProps } from "./FooterListItem";

const footerDetails: FooterListItemProps[] = [
  {
    title: "Products",
    footerItems: [
      {
        name: "Primitives",
      },
      {
        name: "Colors",
      },
      {
        name: "Icons",
        external: true,
      },
    ],
  },
  {
    title: "Docs",
    footerItems: [
      {
        name: "Introduction",
      },
      {
        name: "Styling",
      },
      {
        name: "Accessibility",
      },
      {
        name: "Releases",
      },
    ],
  },
  {
    title: "Community",
    footerItems: [
      {
        name: "GitHub",
        external: true,
      },
      {
        name: "Twitter",
        external: true,
      },
      {
        name: "Discord",
        external: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="self-baseline flex flex-row justify-start items-center gap-44 p-10 flex-wrap">
      <div className="flex flex-col justify-start items-start gap-7">
        <Logo />
        <p className="text-md text-white/40 tracking-tight">
          A project by <span className="text-white/60">WorkOs</span>
        </p>
      </div>
      {footerDetails.map((footer, index) => (
        <FooterListItem
          key={index}
          title={footer.title}
          footerItems={footer.footerItems}
        />
      ))}
    </div>
  );
};

export default Footer;
