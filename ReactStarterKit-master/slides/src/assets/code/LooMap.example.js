export default `import React from 'react';
import {
  Map,
  TileLayer,
  GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const credit = '&copy; OpenStreetMap';

const LooMap = (props) => {
  return (
      <Map
        center={[46.76, 23.59]}
        zoom={13}
        style={{height: '600px'}}>
        <TileLayer
          url={tiles}
          attribution={credit}
        />
        <GeoJSON data={props.loos} />
      </Map>
  );
}

export default LooMap;`;
