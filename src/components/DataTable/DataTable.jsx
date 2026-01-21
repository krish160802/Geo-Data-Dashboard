import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'projectName', headerName: 'Project Name', flex: 1 },
  { field: 'latitude', headerName: 'Latitude', width: 120 },
  { field: 'longitude', headerName: 'Longitude', width: 120 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'lastUpdated', headerName: 'Last Updated', width: 140 },
]

function DataTable({ rows, selectedId, onRowClick }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        hideFooter
        disableRowSelectionOnClick
        onRowClick={(params) => onRowClick(params.row.id)}
        getRowClassName={(params) =>
          params.row.id === selectedId ? 'selected-row' : ''
        }
        sx={{
          '& .selected-row': {
            backgroundColor: '#e3f2fd !important',
          },
        }}
      />
    </div>
  )
}

export default DataTable
