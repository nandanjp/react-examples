import { FormEvent } from "react";

interface SearchBarProps {
  setQuery: (newQuery: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { setQuery } = props;

  function assertIsFormFieldElement(
    element: Element
  ): asserts element is
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLButtonElement {
    if (!("value" in element)) {
      throw new Error(`Element is not a form field element`);
    }
  }

  return (
    <div className="w-48 md:w-96">
      <form
        action=""
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const firstField = event.currentTarget[0];
          assertIsFormFieldElement(firstField);
          setQuery(firstField.value);
        }}
      >
        <input
          name="query"
          type="text"
          placeholder="cars"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition ease-in-out duration-300"
        />
      </form>
    </div>
  );
};

export default SearchBar;
