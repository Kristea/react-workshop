import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from './Nav';

describe('Nav', () => {
  it('Matches the snapshot', () => {
    const component = mount(<Nav/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Calls showList when the list button is clicked', () => {
    const showList = jest.fn();
    const component = mount(<Nav showList={showList}/>);
    component.find('button').at(0).simulate('click');
    expect(showList).toHaveBeenCalled();
  });

  it('Calls showMap when the map button is clicked', () => {
    const showMap = jest.fn();
    const component = mount(<Nav showMap={showMap}/>);
    component.find('button').at(1).simulate('click');
    expect(showMap).toHaveBeenCalled();
  });
});
