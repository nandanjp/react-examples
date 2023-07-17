import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchMonQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const PokemonTable = () => {
  const { data, isFetching } = useFetchMonQuery({
    name: "greninja",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const greatestRows: number = getMaxRows(
    data?.abilities.length,
    data?.moves.length,
    data?.species.length,
    data?.stats.length,
    data?.types.length
  );

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < greatestRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.base_experience : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.height : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.weight : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.abilities.length ? data.abilities[i].ability.name : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.moves.length ? data.moves[i].move.name : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.stats.length ? data.stats[i].base_stat : "--"}
          </TableCell>
        ) : null}
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Pokemon Details</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>PokeID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>BaseExp</TableHead>
          <TableHead>Height</TableHead>
          <TableHead>Weight</TableHead>
          <TableHead>Abilities</TableHead>
          <TableHead>Moves</TableHead>
          <TableHead>Stats</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default PokemonTable;
