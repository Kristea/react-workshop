import React, { Component } from 'react';
import Loo from './loos.json'

const LooList = (props) => {
	return(
		<ul>
		{props.loos.map((loo) => (
			<li key={loo._id}>
			<Loo loo = {loo} />
			</li>
			))}
		</ul>
		);
}

 LooList.defaultProps = {
      name : "No name",
      type : "No type"
    };
//props.geojson.features.map((loo) =>
    //li key = loo.id
// loo {...loo.properties}
//li
    //)
