import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const mapCenter: LatLngTuple = [33.4242, -111.9281]; // Arizona State University, Tempe campus
  const zoomLevel = 13;

  const [geoJsonData, setGeoJsonData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    const fetchGeoJsonData = async () => {
      const response = await fetch('/tempe_zip_codes.geojson');
      const data = await response.json();
      setGeoJsonData(data);
    };

    fetchGeoJsonData();
  }, []);

  const zipCodeStyle = () => {
    return {
      color: '#1E90FF', 
      weight: 4, 
      fillColor: 'transparent-purple', 
    };
  };

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        geoJsonData && (
          <GeoJSON
            key="tempe-zip-codes"
            data={geoJsonData}
            style={zipCodeStyle}
          />
        )
      }
    </MapContainer>
  );
};

export default MapComponent;
