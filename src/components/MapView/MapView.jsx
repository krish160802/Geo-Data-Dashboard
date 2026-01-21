import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix default marker icon issue in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function MapView({ rows, selectedId, onMarkerClick }) {
  const center = rows.length
    ? [rows[0].latitude, rows[0].longitude]
    : [22.5, 75.5]

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {rows.map((row) => (
        <Marker
          key={row.id}
          position={[row.latitude, row.longitude]}
          eventHandlers={{
            click: () => onMarkerClick(row.id),
          }}
        >
          <Popup>
            <strong>{row.projectName}</strong>
            <br />
            Status: {row.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapView
