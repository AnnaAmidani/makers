import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BookingForm extends PureComponent {
  constructor(props) {
    super(props);

  	this.state = {
      room: this.props.room || '',
      start: this.props.start || ''
  	};
  }

  componentDidMount() {

	}

  componentWillReceiveProps(nextProps) {
    if (nextProps.room && nextProps.room !== this.state.room) {
      this.setState({room: nextProps.room});
    }
  }

  submitBooking = () => {

    let to = new Date(this.state.start);
    to.setMinutes(to.getMinutes() + 30);
    console.log(to);
    const data = {
      "from": `${this.state.start.slice(0,10)}-${this.state.start.slice(11,16)}:00`,
      "roomName": this.state.room,
      "roomRef": "123",
      "to": `${to.toISOString().slice(0,10)}-${to.toISOString().slice(11,16)}:00`
    }
    fetch('https://meetingrooms-booking.azurewebsites.net/bookings/bookARoom', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
    <div className="Booking-form">
      <label>Select Meeting Room</label>
      <select onChange={this.handleRoomChange} value={this.state.room}>
      <option></option>
        <option value="room1">Meeting Room 1</option>
        <option value="room2">Meeting Room 2</option>
        <option value="room3">Meeting Room 3</option>
      </select>
      <label>Select date and time</label>
      <input onChange={this.handleTime} value={this.state.start} type="datetime-local"/>
      <button onClick={this.submitBooking}>Submit</button>
    </div>
    );
  }
}
BookingForm.propTypes = {
  room: PropTypes.string,
  start: PropTypes.string
};
export default BookingForm;
