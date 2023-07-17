import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetGenderQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const GendersTable = () => {
  const { data, isFetching } = useGetGenderQuery({
    name: "male",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const maxRows = getMaxRows(
    data?.pokemon_species_details.length,
    data?.required_for_evolution.length
  );

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.pokemon_species_details.length
              ? data.pokemon_species_details[i].rate
              : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.pokemon_species_details.length
              ? data.pokemon_species_details[i].pokemon_species.name
              : "--"}
          </TableCell>
        ) : null}
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Encounter Methods Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>GenderID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Rate</TableHead>
          <TableHead>PokemonSpecies</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default GendersTable;
