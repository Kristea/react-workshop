import React from 'react';
import {
	Map, TileLayer, GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl : icon,
	shadowUrl : iconShadow
}) ;
L.Marker.prototype.options.icon = DefaultIcon;
//version of leaflet from library- up do date
//folder of production ready files from leaflets

const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const credit = '&copy; OpenStreetMap';
const LooMap = (props) => {
	let coords = [52.62, 1.29];
	let mapHeight = "600px";
	let mapWidth = "600px";
	if(!Array.isArray(props.loos)){
		coords = props.loos.geometry.coordinates.slice(0).reverse();
		mapHeight = "200px";
		mapWidth = "200px";
	}
	return (
		<Map
		center = {coords}
		zoom = {13}
		style = {{height: mapHeight, width: mapWidth}}>
		<TileLayer
		url = {tiles}
		attribtion = {credit}
		/>
		<GeoJSON data={props.loos}/>
		</Map>
		)
}


export default LooMap;