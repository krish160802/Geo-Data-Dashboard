import geoData from '../data/geoData.json'

export function fetchGeoData({ page = 0, limit = 50 }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: geoData.slice(page * limit, (page + 1) * limit),
        total: geoData.length,
      })
    }, 300)
  })
}
