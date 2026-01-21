import { useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { useGeoData } from '../hooks/useGeoData'
import DataTable from '../components/DataTable/DataTable'
import MapView from '../components/MapView/MapView'


function Dashboard() {
  const [page, setPage] = useState(0)
  const [selectedId, setSelectedId] = useState(null)

  const limit = 50
  const { data, total, loading } = useGeoData(page, limit)

  return (
    <DashboardLayout
      left={
        <div>
          <h2>Projects</h2>
          <p><strong>Selected ID:</strong> {selectedId ?? 'None'}</p>

          {loading && <p>Loading data...</p>}

          {!loading && (
            <>
              <p>Showing {data.length} of {total}</p>

              <DataTable
                rows={data}
                selectedId={selectedId}
                onRowClick={setSelectedId}
              />
            </>
          )}
        </div>
      }
      right={
        <div style={{ height: '100%' }}>
    <h2>Map View</h2>

    {!loading && (
      <MapView
        rows={data}
        selectedId={selectedId}
        onMarkerClick={setSelectedId}
      />
    )}
  </div>
      }
    />
  )
}

export default Dashboard
