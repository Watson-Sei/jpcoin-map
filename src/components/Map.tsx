import React from 'react';
import MapGL, { GeolocateControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import COINS from '../.data/coins.json';
import Markers from '../components/Marker';
import Info from '../components/Info';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;
const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
};
const positionOptions = {enableHighAccuracy: true}

function Map() {
    const [viewport, setViewport] = React.useState({
        latitude: 35.465981,
        longitude: 139.622062,
        pitch: 60,
        bearing: 10,
        zoom: 15
    });

    const [popupInfo, setPopupInfo] = React.useState<{ name: string; latitude: number; longitude: number; image: string, kinds: number[]} | null>(null)

    return (
        <>
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(nextViewport: React.SetStateAction<{latitude: number; longitude: number; pitch: number; bearing: number; zoom: number;}>) => setViewport(nextViewport)}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Markers data={COINS} onClick={setPopupInfo} />
                {popupInfo && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        closeOnClick={false}
                        onClose={setPopupInfo}
                    >
                        <Info info={popupInfo} />
                    </Popup>
                )}

                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={positionOptions}
                    trackUserLocation
                    auto
                />
            </MapGL>
        </>
    )
}

export default Map;