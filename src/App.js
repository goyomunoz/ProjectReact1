import React, { Component } from 'react';
import './App.css';
import InputAddTask from './Components/InputAddTask';
import ListTasks from './Components/ListTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: '',
      tareas: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ texto: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Tarea  ' + this.state.texto + '   agregada correctamente');

    let tarea = this.state.tareas;
    tarea.push(this.state.texto);
    this.setState({ tareas: tarea });
    this.setState({ texto: '' });

  }

  onDelete(id) {    
    var tareasList = this.state.tareas;
    tareasList.splice(id, 1);
    this.setState({tareas: tareasList});
  }

  render() {
    let listTareas = [];
    listTareas = this.state.tareas.map((task, index)=>{
      return(
        <tr key={index}>
        <td>#</td>
        <td>{task}</td>
        <td><button className="btn btn-danger" onClick={this.onDelete}>
            <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </td>
        </tr>
      )
    });
    return (
      <div>
        <InputAddTask
          text={this.state.texto}
          escribe={this.handleChange}
          ok={this.handleSubmit}
        />
       <ListTasks
       obj={listTareas}
       />
      </div>
    );
  }
}
export default App;
