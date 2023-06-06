import ButtonAnimated from "./components/ui/ButtonAnimated";
import ButtonSimple from "./components/ui/ButtonSimple";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <div className="my-8 mx-2">
        <ButtonSimple text="Sign Up" alternative={false} />
      </div>
      <div className="mx-2 my-8">
        <ButtonSimple text="Sign Up" alternative={true} />
      </div>
      <div className="mx-2 my-8">
        <ButtonAnimated text="Sign Up" />
      </div>
      <div className="mx-2 my-8">
        <Navbar />
      </div>
    </>
  );
}

export default App;
