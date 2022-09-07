import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Map = ({data, city, street}) => {
    const {lat, lng} = data;

    const position = [ lng, lat ]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        {city} <br /> {street}
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default Map;
