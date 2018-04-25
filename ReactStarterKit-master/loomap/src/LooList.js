import React from 'react';
import Loo from './Loo';

const LooList = (props) => {
  return (
    <ul>
      {props.geojson.features.map((loo) => (
          <li key={loo._id}>
            <Loo loo={loo} />
          </li>
      ))}
    </ul>
  );
}

export default LooList;
