import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
		this.submitHandler = this.submitHandler.bind(this)
		this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
  }

  // componentDidMount() {
	// fetch('https://meetingrooms-booking.azurewebsites.net/bookings/findAll')
	// 	.then(response => response.json())
	// 	.then(data => this.setState({ bookings: data }));
	// }

	// let submit = document.querySelector("check-availability-form")

	// submit.onClick()

	submitHandler(event) {
		console.log(this.state)
		event.preventDefault()
	}

	handleRoomNameChange(event) {
		this.setState({roomName: event.target.value}) 
	}

	handleStartTimeChange(event) {
		this.setState({startTime: event.target.value}) 
	}

	handleEndTimeChange(event) {
		this.setState({endTime: event.target.value}) 
	}



  render() {

    return (
	<div className="App">
	  <header className="App-header">
	    <h4>Check Room Availability</h4>
	  </header>

		<p className="Intro"> To view availability please enter a room name alongside your preferred start and end times: </p>
    <form className="check-availability-form" onSubmit={this.submitHandler}>
      <div>
        <label htmlFor="room-name">Room name: </label>
        <input type="text" name="room-name" placeholder="e.g. G05" onChange={this.handleRoomNameChange} required></input>
      </div>

      <div>
        <label htmlFor="start-time">Start of booking: </label>
        <input type="datetime-local" name="start-time" onChange={this.handleStartTimeChange} required></input>
      </div>

      <div>
        <label htmlFor="room-name">End of booking: </label>
        <input type="datetime-local" name="end-time"onChange={this.handleEndTimeChange} required></input>
      </div>

      <div>
        <button type="submit">Check availability</button>
      </div>
    </form>

		<div className="Availability">
		</div>

	</div>
    );
  }
}

export default App;


// Click button
// Checks the Database using a function. Expect either a true or false return. Append 