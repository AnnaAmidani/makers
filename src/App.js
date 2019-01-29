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
    <form className="check-availability-form">
      <div>
        <label for="room-name">Room name: </label>
        <input type="text" name="room-name" placeholder="e.g. G05"></input>
      </div>

      <div>
        <label for="start-time">Start of booking: </label>
        <input type="datetime-local" name="start-time"></input>
      </div>

      <div>
        <label for="room-name">End of booking: </label>
        <input type="datetime-local" name="end-time"></input>
      </div>

      <div>
        <button>Check availability</button>
      </div>
    </form>

	</div>
    );
  }
}

export default App;
