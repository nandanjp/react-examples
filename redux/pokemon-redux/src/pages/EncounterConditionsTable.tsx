import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetEncounterConditionQuery } from "@/features/pokemon/pokemon-api-slice";
import { getMaxRows } from "@/lib/utils";

const EncounterConditionsTable = () => {
  const { data, isFetching } = useGetEncounterConditionQuery({
    name: "swarm",
    limit: 20,
    offset: 40,
  });

  if (isFetching)
    return (
      <p className="text-5xl text-blue-300 p-4">Loading Pokemon Data...</p>
    );

  const maxRows = getMaxRows(data?.values.length);

  const tableBody: React.ReactNode[] = [];
  for (let i = 0; i < maxRows; ++i) {
    tableBody.push(
      <TableRow key={data ? i * data.id : i * 456}>
        <TableCell>{i === 0 ? data?.id : "--"}</TableCell>
        <TableCell>{i === 0 ? data?.name : "--"}</TableCell>
        {data ? (
          <TableCell>
            {i < data.values.length ? data.values[i].name : "--"}
          </TableCell>
        ) : null}
      </TableRow>
    );
  }

  return (
    <Table className="max-w-fit">
      <TableCaption>Encounter Conditions Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>MethodID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Values</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  );
};

export default EncounterConditionsTable;
