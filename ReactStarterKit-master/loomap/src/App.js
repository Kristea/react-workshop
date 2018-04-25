import React, { Component } from 'react';

import Nav from './Nav';
import LooList from './LooList';
import LooMap from './LooMap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: 'list',
      geojson: null,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      'https://gbptm-ui.herokuapp.com/loos/near/23.592/46.769',
      {
        headers: new Headers({'Accept': 'application/json'})
      }
    );
    const geojson = await res.json();
    this.setState({ geojson });
  }

  showMap = () => {
    this.setState(() => ({show: 'map'}));
  }

  showList = () => {
    this.setState(() => ({show: 'list'}));
  }

  render() {
    let data = this.state.geojson;
    if (!data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Nav showMap={this.showMap} showList={this.showList}/>
        {this.state.show === 'list' ? (
          <LooList geojson={data} />
        ) : (
          <LooMap
            center={[46.76, 23.59]}
            zoom={13}
            geojson={data}
            height="600px"
            />
        )}
      </div>
    );
  }
}

export default App;
