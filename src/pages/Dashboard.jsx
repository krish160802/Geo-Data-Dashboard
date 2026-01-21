import { useState, useMemo } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { useGeoData } from '../hooks/useGeoData'
import DataTable from '../components/DataTable/DataTable'
import MapView from '../components/MapView/MapView'

function Dashboard() {
  const [page, setPage] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [search, setSearch] = useState('')

  const limit = 50
  const { data, total, loading } = useGeoData(page, limit)

  // Client-side filtering (project name)
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      row.projectName.toLowerCase().includes(search.toLowerCase())
    )
  }, [data, search])

  return (
    <DashboardLayout
      left={
        <div>
          <h2>Projects</h2>

          {/* Debug / verification (can keep or remove) */}
          <p>
            <strong>Selected ID:</strong> {selectedId ?? 'None'}
          </p>

          {/* Search filter */}
          <input
            type="text"
            placeholder="Search by project name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '8px',
              marginBottom: '8px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />

          {loading && <p>Loading data...</p>}

          {!loading && (
            <>
              <p>
                Showing {filteredData.length} of {total}
              </p>

              <DataTable
                rows={filteredData}
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
              rows={filteredData}
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
