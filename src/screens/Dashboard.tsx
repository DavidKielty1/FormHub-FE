import { useMutation, useQuery } from "@apollo/client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { GET_ALL_SUBMISSIONS } from "../graphql/queries/GetSubmissions";
import { GetSubmissionsQuery } from "../gql/graphql";
import { startCase, uniq } from "lodash";
import styled from "@emotion/styled";
import { GENERATE_SUBMISSIONS } from "../graphql/mutations/GenerateSubmissions";

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  background: white;
  color: black;
  padding: 1rem;
  padding-inline: 2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

function Dashboard() {
  const { data, loading, error } =
    useQuery<GetSubmissionsQuery>(GET_ALL_SUBMISSIONS);

  const [generateSubmissions] = useMutation(GENERATE_SUBMISSIONS, {
    variables: { count: 10 },
  });

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
      <Toolbar>
        <Button onClick={() => generateSubmissions()}>
          Generate Submissions
        </Button>
      </Toolbar>
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
