import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputAddTask from './Components/InputAddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faCoffee, faCheckSquare  } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component  {
  render() {
    return (
      <div>
          <InputAddTask>

          </InputAddTask>
      </div>
    );
  }
}
export default App;
