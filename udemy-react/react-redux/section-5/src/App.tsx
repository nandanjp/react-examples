import { useEffect, useState } from "react";
import searchImages, { UnsplashResponse } from "./utils/api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [imageLinks, setImageLinks] = useState<string[]>([]);

  useEffect(() => {
    searchImages(searchQuery).then((res: UnsplashResponse) => {
      const images: string[] = [];
      for (const d of res.data.results) {
        const { urls } = d;
        const { small } = urls;
        images.push(small);
      }
      setImageLinks([...images]);
    });
  }, [searchQuery]);

  const handleQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  return (
    <div className="min-w-screen min-h-screen p-16 text-black flex flex-col gap-8 justify-evenly items-center">
      <h1 className="text-6xl text-blue-600 py-6 px-4 tracking-wider uppercase">
        Images Lol
      </h1>
      <SearchBar setQuery={handleQueryChange} />
      <ImageList imageLinks={imageLinks} />
    </div>
  );
};

export default App;
