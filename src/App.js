//Dependencies
import React, { Component } from 'react';
//Local Component imports
import Scheduler from './containers/AppointmentScheduler/Scheduler';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Scheduler />
      </div>
    );
  }
}

export default App;
