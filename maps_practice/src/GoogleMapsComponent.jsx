import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"


const containerStyle = {
    width: '800px',
    heoght: '600px'
}

const center = {
    lat: 40.712776,
    lng: -74.005974
}

const GoogleMapsComponent = ({places}) => {
const API_KEY = import.meta.env.VITE_API_KEY

return (
    <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            {places.map((place, index) => (
                <Marker key={index}
                position={{lat: place.geometry.location.lat, lng: place.geometry.location.lng}}
                title={place.name}/>
            ))}
        </GoogleMap>
    </LoadScript>
)
}


export default GoogleMapsComponent