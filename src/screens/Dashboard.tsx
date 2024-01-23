import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { GET_ALL_SUBMISSIONS } from "../graphql/queries/GetSubmissions";
import { GetSubmissionsQuery } from "../gql/graphql";
import { startCase, uniq } from "lodash";

function Dashboard() {
  const { data, loading, error } =
    useQuery<GetSubmissionsQuery>(GET_ALL_SUBMISSIONS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return;

  const submissions = data.submissions;

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "submittedAt",
      headerName: "Submitted",
      width: 200,
    },
    ...uniq(submissions.flatMap((s) => Object.keys(s.data))).map((field) => ({
      field,
      headerName: startCase(field),
      width: 200,
      valueGetter: (params: GridValueGetterParams) => params.row.data[field],
    })),
  ];

  return (
    <div>
      <DataGrid
        rows={submissions}
        columns={columns}
        sx={{
          color: "white",
        }}
      />
    </div>
  );
}

export default Dashboard;
