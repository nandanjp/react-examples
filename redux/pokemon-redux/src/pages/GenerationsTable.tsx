import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetGenerationQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const GenerationsTable = () => {
  const { data, isFetching } = useGetGenerationQuery({
    name: "generation-i",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const maxRows = getMaxRows(
    data?.main_region.length,
    data?.moves.length,
    data?.pokemon_species.length
  );

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.main_region.length ? data.main_region[i].name : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.moves.length ? data.moves[i].name : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.pokemon_species.length
              ? data.pokemon_species[i].name
              : "--"}
          </TableCell>
        ) : null}
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Generation Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>GenerationID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>MainRegion</TableHead>
          <TableHead>PokemonSpecies</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default GenerationsTable;
