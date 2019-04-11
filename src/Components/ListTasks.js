import React from 'react';

const ListTasks = (props) => {  
  return (
    <div className="container">
      <div className="row col-md-10 mt-5">
      <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Tarea</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>{props.obj}</tbody>
      </table>
      </div>
    </div>
  );
};
export default ListTasks;
