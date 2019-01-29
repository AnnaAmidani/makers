import React, { Component } from 'react';
import Availability from './Availability';
import BookingForm from './Components/BookingForm';
import './App.css';

class App extends Component {

  constructor(props) {
		super(props);
		this.roomAvailable = this.roomAvailable.bind(this);

		this.state = {
      room: "room1",
      start: "2019-01-17T10:30",
			booking: false
		}
  }

	roomAvailable() {
		this.setState({
			booking: true,
      room: "room1",
      start: "2019-01-17T10:30"
		})
  }

  componentDidMount() {
	}


  render() {

    return (
	<div className="App">
	  <header className="App-header">
	    <h4>{this.state.booking ? 'Book Room' : 'Check Room Availability'}</h4>
	  </header>

    {!this.state.booking && <Availability isAvailable={this.roomAvailable} />}
    {this.state.booking && <BookingForm room={this.state.room} start={this.state.start}/>}
	</div>
		)
	}
}

export default App;
