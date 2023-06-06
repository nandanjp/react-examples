const ImportExportToggle = () => {
  return (
    <>
      <div className="flex justify-evenly gap-1 p-0.5 bg-gray-200 focus:outline-none transition ease-in-out rounded-md">
        <button
          className="flex justify-evenly gap-1 p-2 bg-white focus:outline-none transition ease-in-out rounded-md text-blue-400 font-bold text-sm"
          type="button"
        >
          <span className="font-medium text-gray-600 dark:text-blue-400">
            JL
          </span>
          Import
        </button>
        <button
          className="flex justify-evenly gap-1 p-2 bg-white focus:outline-none transition ease-in-out rounded-md text-blue-400 font-bold text-sm"
          type="button"
        >
          <span className="font-medium text-gray-600 dark:text-blue-400">
            JL
          </span>
          Export
        </button>
      </div>
    </>
  );
};

export default ImportExportToggle;
