import ButtonSimple from "./ButtonSimple";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle px-4 py-2 w-full sticky shadow-md border-b-2 border-solid border-1 border-gray-100/50 backdrop-blur-sm m-0">
      <div className="self-center">Dub Logo</div>
      <div className="flex justify-between px-4 align-middle">
        <a className="self-center px-4 transition ease-in-out delay-75 text-gray-400 hover:text-gray-500 cursor-pointer">
          Pricing
        </a>
        <a className="self-center px-4 transition ease-in-out delay-75 text-gray-400 hover:text-gray-500 cursor-pointer">
          Changelog
        </a>
        <a className="self-center px-4 transition ease-in-out delay-75 text-gray-400 hover:text-gray-500 cursor-pointer">
          Log in
        </a>
        <ButtonSimple text="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
