import React, { Component } from 'react';
import Availability from './Availability';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
	<div className="App">
    <Availability />
	</div>
    );
  }
}

export default App;
