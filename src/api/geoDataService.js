import geoData from '../data/geoData.json'

export function fetchGeoData({ page = 0, limit = 50 }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * limit
      const end = start + limit

      resolve({
        data: geoData.slice(start, end),
        total: geoData.length,
      })
    }, 300) // simulate network delay
  })
}
