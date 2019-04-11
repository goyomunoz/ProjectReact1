import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faSearch  } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'reactstrap';

const InputAddTask = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <Input placeholder="Ingresa una nueva Tarea.." />
        </div>
        <div className="col col-md-2">
          <button className="btn btn-primary"><FontAwesomeIcon icon={faSearch }/></button>
        </div>
      </div>
    </div>
  );
};

export default InputAddTask;