import React from 'react';
import Loo from './Loo';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';

const data = {
	"_id": "5a031106a762310011e94c4f",
	"properties": {
		"name": "Piata Unitii"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [23.589, 46.770]
	},
	"type": "Feature",
	"distance": 245
};

describe('Loo', () => {
  it('Renders a heading and a Map', () => {
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);
    const component = mount(
      <Loo loo={data}/>,
      {
        attachTo: div
      }
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
