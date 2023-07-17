import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAbilityQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const AbiltiesTable = () => {
  const { data, isFetching } = useGetAbilityQuery({
    name: "protean",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const maxRows = getMaxRows(data?.effect_entries.length, data?.pokemon.length);

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.is_main_series : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.generation.name : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.effect_entries.length
              ? data.effect_entries[i].effect
              : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.pokemon.length ? data.pokemon[i].pokemon.name : "--"}
          </TableCell>
        ) : null}
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Ability Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>AbilityID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Is Main Series</TableHead>
          <TableHead>Generation</TableHead>
          <TableHead>Effect Entries</TableHead>
          <TableHead>Pokemon</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default AbiltiesTable;
