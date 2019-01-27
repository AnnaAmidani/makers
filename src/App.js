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
	    <h4>Meeting rooms booking App</h4>
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Bookings list:
			<ul>
				{bookings.map(booking =>
				<li key={booking.objectID}>
					{booking.roomName}>{booking.roomRef} - from: {booking.from} to: {booking.to}
				</li>
				)}
			</ul>
		</p>
	  </header>
	</div>
    );
  }
}

export default App;
