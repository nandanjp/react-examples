import ContentToggle from "./ContentToggle";
import EditableButton from "./EditableButton";
import ImportExportToggle from "./ImportExportToggle";
import VersionDropDown from "./VersionDropDown";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-between p-3 bg-white text-slate-950 shadow rounded-lg">
        <div className="flex justify-evenly items-center gap-4 font-bold">
          <svg
            fill="#000000"
            height="10px"
            width="10px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            className="font-bold"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="XMLID_92_"
                d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
              ></path>{" "}
            </g>
          </svg>
          <h4 className="text-lg text-gray-800 font-bold">Default Shop</h4>
          <VersionDropDown />
          <ContentToggle />
        </div>
        <div className="flex justify-evenly items-center gap-2">
          <EditableButton />
          <EditableButton />
          <VersionDropDown />
          <ImportExportToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
