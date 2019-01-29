import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

	this.state = {
    room: "",
    start: ""
	};
}

  componentDidMount() {
	fetch('https://meetingrooms-booking.azurewebsites.net/bookings/findAll')
		.then(response => response.json())
		.then(data => this.setState({ bookings: data }));
	}

  submitBooking = () => {
  fetch('https://meetingrooms-booking.azurewebsites.net/bookings/findAll')
    .then(response => response.json())
    .then(data => this.setState({ bookings: data }));
  }

  handleRoomChange = (event) => {
    this.setState(
      {
        room: event.target.value
      }
    );
  }

  handleTime = (event) => {
    this.setState(
      {
        start: event.target.value
      }
    );
  }

  render() {
	const { bookings } = this.state;

    return (
	<div className="App">
	  <header className="App-header">
	    <h4>Meeting rooms booking App</h4>
	  </header>
    <div className="Booking-form">
    <label>Select Meeting Room</label>
    <select onChange={this.handleRoomChange} value={this.state.room}>
    <option></option>
      <option value="room1">Meeting Room 1</option>
      <option value="room2">Meeting Room 2</option>
      <option value="room3">Meeting Room 3</option>
    </select>
    <label>Select Time</label>
    <input onChange={this.handleTime} value={this.state.start} type="datetime-local"/>
    <button onClick={this.submitBooking}>Submit</button>
    </div>
	</div>
    );
  }
}

export default App;
