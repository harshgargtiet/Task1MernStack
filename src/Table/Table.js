import React, { useState } from 'react';
import Register from '../Register/Register.js';
import jsonData from './data.json';
  
function Table() {
  const [submittedData, setSubmittedData] = useState(jsonData);
  
  const tableRows = submittedData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.apireqparam}</td>
        <td>{info.apiresparam}</td>
        <td>{info.process}</td>
        <td>{info.project}</td>
        <td>{info.page}</td>
        <td>{info.panel}</td>
        <td>{info.client}</td>
        <td>{info.section}</td>
        <td>{info.selector}</td>
       
       
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalSub = submittedData.length;
    data.id = totalSub + 1;
    const updatedSubData = [...submittedData];
    updatedSubData.push(data);
    setSubmittedData(updatedSubData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>APIreq</th>
            <th>APIres</th>
            <th>Process</th>
            <th>Project</th>
            <th>Page</th>
            <th>Panel</th>
            <th>Client</th>
            <th>Section</th>
            <th>Selector</th>
            
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Register func={addRows} />
    </div>
  );
}
  
export default Table;