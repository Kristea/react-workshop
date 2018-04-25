import React from 'react';

import LooMap from './LooMap';

const Loo = (props) => {
  let coords = props.loo.geometry.coordinates.slice(0).reverse();
  return (
    <div>
      <h3>{props.loo.properties.name}</h3>
      <LooMap
        center={coords}
        zoom={15}
        height="200px"
        geojson={props.loo}
        fixed={true}
        />
    </div>
  );
}

export default Loo;
