const VersionDropDown = () => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-800 hover:bg-slate-300 focus:outline-none rounded-lg py-2 px-3 text-center border-gray-200 border-2 bg-white flex justify-between items-center text-sm font-semibold gap-4"
        type="button"
      >
        1-Variant 1
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default VersionDropDown;
