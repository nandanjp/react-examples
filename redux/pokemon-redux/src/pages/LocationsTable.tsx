import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetLocationQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const LocationsTable = () => {
  const { data, isFetching } = useGetLocationQuery({
    name: "canalave-city",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const maxRows = getMaxRows(1);

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.region.name : "--"}</TableCell>
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Location Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>LocationID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Region</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default LocationsTable;
