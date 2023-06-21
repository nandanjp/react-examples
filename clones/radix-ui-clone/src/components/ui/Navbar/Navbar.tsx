import IconButton from "../IconButton";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="self-start flex flex-row justify-between items-center min-w-full">
      <div className="">
        <Logo />
      </div>
      <div className="flex flex-row justify-evenly items-center gap-6">
        <NavbarItem text="Documentation" />
        <NavbarItem text="Case studies" />
        <NavbarItem text="Resources" hasPlus />
        <IconButton />
      </div>
    </div>
  );
};

export default Navbar;
