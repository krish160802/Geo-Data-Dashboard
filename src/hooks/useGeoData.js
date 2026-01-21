import { useEffect, useState } from 'react'
import { fetchGeoData } from '../api/geoDataService'

export function useGeoData(page, limit) {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetchGeoData({ page, limit }).then((res) => {
      setData(res.data)
      setTotal(res.total)
      setLoading(false)
    })
  }, [page, limit])

  return { data, total, loading }
}
