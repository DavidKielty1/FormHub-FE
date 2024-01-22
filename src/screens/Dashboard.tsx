import { gql, useQuery } from "@apollo/client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

function Dashboard() {
  const { data, loading } = useQuery(gql`
    query SubmissionsQuery {
      submissions {
        id
        submittedAt
        data
      }
    }
  `);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Dashboard;
