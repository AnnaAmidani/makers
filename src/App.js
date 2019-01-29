import React, { Component } from 'react';
import Availability from './Availability';
import './App.css';

class App extends Component {

  constructor(props) {
		super(props);
		this.roomAvailable = this.roomAvailable.bind(this);

		this.state = {
			booking: false
		}
  }

	roomAvailable() {
		this.setState({
			booking: true,
		})
	}


  render() {

    return (
	<div className="App">
    {!this.state.booking && <Availability isAvailable={this.roomAvailable} />}
	</div>
    );
  }
}

export default App;
