import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'reactstrap';

const InputAddTask = (props) => {
  return (
    <div className="container">
      <div className="mt-5">
        <form onSubmit={props.ok}>
          <div className="row">
            <div className="col-8 col-lg-10 col-md-8 ">
              <Input placeholder="Ingresa una nueva Tarea.."
                value={props.text}
                onChange={props.escribe}
              />
            </div>
            <div className="col-2 col-lg-2 col-md-2">
              <button type="submit" value="Submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputAddTask;