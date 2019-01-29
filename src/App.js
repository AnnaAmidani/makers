import React, { Component } from 'react';
import './App.css';
import BookingForm from './Components/BookingForm';

class App extends Component {

  constructor(props) {
    super(props);

  	this.state = {
      room: "room1",
      start: "2019-01-17T10:30"
  	};
  }

  componentDidMount() {
	}


  render() {
    const { bookings } = this.state;

    return (
    	<div className="App">
    	  <header className="App-header">
    	    <h4>Meeting rooms booking App</h4>
    	  </header>
        <BookingForm room={this.state.room} start={this.state.start}/>
    	</div>
    );
  }
}

export default App;
