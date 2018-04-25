import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LooMap = (props) => {
  return (
      <Map
        center={props.center}
        zoom={props.zoom}
        style={{height: props.height}}
        scrollWheelZoom={!props.fixed}
        keyboard={!props.fixed}
        touchZoom={!props.fixed}
        dragging={!props.fixed}
        zoomControl={!props.fixed}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap'
        />
        <GeoJSON data={props.geojson} />
      </Map>
  );
}

LooMap.defaultProps = {
  zoom: 13,
  height: '600px',
  fixed: false,
};

LooMap.propTypes = {
  center: PropTypes.array.isRequired,
  geojson: PropTypes.object.isRequired,
  zoom: PropTypes.number,
}

export default LooMap;
