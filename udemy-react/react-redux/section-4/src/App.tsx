import AnimalShow from "./components/AnimalShow";

const App = () => {
  const animals: string[] = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomAnimal = () => {
    return animals[Math.floor(Math.random() * animals.length)];
  };

  return (
    <div className="min-w-full p-12 min-h-full">
      <div className="w-5/7 flex flex-row justify-evenly items-center p-8 gap-2 flex-wrap">
        <AnimalShow getRandomAnimal={randomAnimal} />
        {/* <AnimalShow />
        <AnimalShow /> */}
      </div>
      <p className="p-8 text-6xl tracking-wider w-full text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600">
        This is the App you know?
      </p>
    </div>
  );
};

export default App;
