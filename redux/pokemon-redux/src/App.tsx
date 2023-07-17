import AbiltiesTable from "./pages/AbiltiesTable";
import EggGroupTable from "./pages/EggGroupTable";
import EncounterConditionsTable from "./pages/EncounterConditionsTable";
import EncounterMethodsTable from "./pages/EncounterMethodsTable";
import GendersTable from "./pages/GendersTable";
import GenerationsTable from "./pages/GenerationsTable";
import LocationsTable from "./pages/LocationsTable";
import PokemonTable from "./pages/PokemonTable";
import RegionsTable from "./pages/RegionsTable";

function App() {
  return (
    <>
      <div className="min-h-screen p-8 grid grid-cols-1 lg:grid-cols-2 grid-flow-row justify-center gap-4 flex-wrap">
        <PokemonTable />
        <EggGroupTable />
        <EncounterConditionsTable />
        <EncounterMethodsTable />
        <GendersTable />
        <GenerationsTable />
        <AbiltiesTable />
        <LocationsTable />
        <RegionsTable />
      </div>
    </>
  );
}

export default App;
