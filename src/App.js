import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

	this.state = {
		bookings: [],
	};
  }

  componentDidMount() {
	fetch('https://meetingrooms-booking.azurewebsites.net/bookings/findAll')
		.then(response => response.json())
		.then(data => this.setState({ bookings: data }));
	}

  render() {
	const { bookings } = this.state;

    return (
	<div className="App">
	  <header className="App-header">
	    <h4>Check Room Availability</h4>
	  </header>
		
		<p className="Intro"> To view availability please enter a room name alongside your preferred start and end times: </p> 

	</div>
    );
  }
}

export default App;
