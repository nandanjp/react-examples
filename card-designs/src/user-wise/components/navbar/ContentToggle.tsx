const ContentToggle = () => {
  return (
    <>
      <button
        className="flex justify-evenly gap-1 p-0.5 bg-gray-200 focus:outline-none transition ease-in-out rounded-lg"
        type="button"
      >
        <div className="bg-white rounded-lg py-1 px-3 flex justify-evenly items-center font-semibold gap-2 capitalize shadow-md">
          <span className="font-medium text-gray-600 dark:text-blue-400">
            JL
          </span>
          Content
        </div>
        <div className="rounded-lg py-1 px-3 flex justify-evenly items-center font-semibold text-gray-800 gap-2 capitalize">
          <span className="font-medium text-gray-600 dark:text-blue-400">
            JL
          </span>
          performance
        </div>
      </button>
    </>
  );
};

export default ContentToggle;
