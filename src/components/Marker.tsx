import React from 'react';
import {Marker} from 'react-map-gl';

function Markers(props: { data: any; onClick: any; }) {
    const {data, onClick} = props;

    return data.map((location: { latitude: number; longitude: number; }, index: React.Key | null | undefined) => (
        <Marker 
            key={index} 
            latitude={location.latitude} 
            longitude={location.longitude}
            onClick={() => onClick(location)}
        >
            <MarkerIcon />
        </Marker>
    ))
}

export default Markers;

export const MarkerIcon: React.FC<unknown> = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="56"
        fill=""
        viewBox="0 0 24 24"
        stroke="#3eb8db"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 
        0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
);