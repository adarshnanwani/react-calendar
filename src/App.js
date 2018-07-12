import React, { Component } from 'react';
import './App.css';
import Appointments from './components/appointments/list';

class App extends Component {

  render() {
      let apps = [{
    title:"hsjsj",
    time:"sadsas"
  }];
    return (
      <div className="App">
        <Appointments appointments={apps} />
      </div>
    );
  }
}

export default App;
