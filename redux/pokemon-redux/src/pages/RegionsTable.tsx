import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetRegionQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const RegionsTable = () => {
  const { data, isFetching } = useGetRegionQuery({
    name: "kanto",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  console.log(data);

  const maxRows = getMaxRows(
    data?.locations.length,
    data?.version_groups.length
  );

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.main_generation.name : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.locations.length ? data.locations[i].name : "--"}
          </TableCell>
        ) : null}
        {data ? (
          <TableCell>
            {i < data.version_groups.length
              ? data.version_groups[i].name
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

export default RegionsTable;
