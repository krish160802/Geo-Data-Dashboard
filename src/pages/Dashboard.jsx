import { useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { useGeoData } from '../hooks/useGeoData'

function Dashboard() {
  const [page, setPage] = useState(0)
  const limit = 50

  const { data, total, loading } = useGeoData(page, limit)

  return (
    <DashboardLayout
      left={
        <div>
          <h2>Projects</h2>
          {loading && <p>Loading data...</p>}
          {!loading && <p>Showing {data.length} of {total}</p>}
        </div>
      }
      right={
        <div>
          <h2>Map View</h2>
          <p>Map will go here</p>
        </div>
      }
    />
  )
}

export default Dashboard
