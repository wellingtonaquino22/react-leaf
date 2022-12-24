import './App.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function App() {
  return (
    <>
    <h1 className='title'>TESTE REACT LEAFLET</h1>
    <div className='leafletContainer'>
    <MapContainer  
    style={{height: "100%", width: "100%"}}
    center={[-8.11389, -35.2915]} 
    zoom={15} 
    scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-8.11623995128, -35.2719688109]}>
    <Popup>
      Localização Marcada.
    </Popup>
  </Marker>
</MapContainer>
</div>
</>
  )
}

export default App;
