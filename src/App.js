import React, { Component } from 'react';
import './App.css';
import BookingForm from './Components/BookingForm';

class App extends Component {

  constructor(props) {
    super(props);

  	this.state = {
      room: "",
      start: "",
      bookings: []
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
        <BookingForm room={this.state.room}/>

        <button onClick={()=>{this.setState({ room: 'room2'})}}>Set room 2</button>
                <button onClick={()=>{this.setState({ room: 'room3'})}}>Set room 3</button>
    	</div>
    );
  }
}

export default App;
