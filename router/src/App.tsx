import PokemonApi from "./pages/PokemonApi";
import SpotifyApi from "./pages/SpotifyApi";
import IGDBApi from "./pages/IGDBApi";
import DictionaryApi from "./pages/DictionaryApi";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon</Link>
            </li>
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/spotify">Music</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/pokemon" element={<PokemonApi />} />
        <Route path="/dictionary" element={<DictionaryApi />} />
        <Route path="/games" element={<IGDBApi />} />
        <Route path="/spotify" element={<SpotifyApi />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
