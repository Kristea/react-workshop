import React, { Component } from 'react';
import LooData from './loos.json'
import LooMap from './LooMap'
import Nav from './Nav'

const LooTile = (props) => (
  <li key={props.loo._id}>
  <p>{props.loo.properties.name}</p> 
  <p>{props.loo.properties.type}</p> 
  <p>Is automatic {props.loo.properties.automatic}</p>
  <p><LooMap loos={props.loo}/></p>
  </li>
  );

const LooList = (props) => (
  <ul>
  {props.loos.map(data => (
    <LooTile loo={data} />
    ))}
  </ul>
  );

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show : 'list',
    };
  }

  showMap = () => {
    this.setState(() =>({
      show: 'map'
    }));
  }
  showList = () => {
    this.setState(() =>({
      show: 'list'
    }));
  } 

  render() {
    
    return (
      <div>
      <Nav showMap={this.showMap} showList={this.showList} loos={LooData.features}/>
      {this.state.show === 'list' 
      ? (<LooList loos={LooData.features}/>) 
      : <LooMap loos={LooData.features}/>
    } 
    </div>
    );

  }


}

export default App;
