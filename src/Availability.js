import React, { Component } from 'react';

class Availability extends Component {

  constructor(props) {
    super(props);
		this.submitHandler = this.submitHandler.bind(this)
		this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
    this.state = {
      errorMessage: ''
    }
  }

	submitHandler(event) {
		console.log(this.state)
    fetch('https://meetingrooms-booking.azurewebsites.net/bookings/isAvailable', {
      method: 'POST',
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "2019-01-29T15:52:35.915Z",
        roomName: "string",
        timeFrom: "2019-01-29T15:52:35.915Z",
        timeTo: "2019-01-29T15:52:35.915Z",
        to: "2019-01-29T15:52:35.915Z"
        }),
    })
  		.then(response => {
        console.log(response)
        // response.json()
      })
  		.then(data => {
        if (data) {
          console.log(data)
        } else {
          this.setState({errorMessage: 'This room is not available for the times selected'});
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMessage: 'Server unavailable'})
      })

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
        <input type="text" name="room-name" placeholder="e.g. G05" onChange={this.handleRoomNameChange}></input>
      </div>

      <div>
        <label htmlFor="start-time">Start of booking: </label>
        <input type="datetime-local" name="start-time" onChange={this.handleStartTimeChange}></input>
      </div>

      <div>
        <label htmlFor="room-name">End of booking: </label>
        <input type="datetime-local" name="end-time"onChange={this.handleEndTimeChange}></input>
      </div>

      <div>
        <button type="submit">Check availability</button>
      </div>
    </form>



		{this.state.errorMessage && <p className="Booking-not-available-message">
      {this.state.errorMessage}
		</p>}

	</div>
    );
  }
}

export default Availability;
