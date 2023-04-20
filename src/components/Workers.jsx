import React, { useState } from 'react'
import "./Worker.css"

const Workers = (props) => {
    const [text, setText] = useState(props.employees.map((e) => ({ ...e })));
    const handleEditInput = (e, index) => {
      const { name, value } = e.target;
      const newList = [...text];
      newList[index][name] = value;
      setText(newList);
    };
    const styleTable = {
        margin: "60px 0 0 30px"
    }
    return (
      <table style={styleTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Days</th>
            <th>Salary per day</th>
          </tr>
        </thead>
  
        {props.employees.map((elem, index) => (
          <tbody>
            <tr key={index}>
              <td>{elem.name}</td>
              <td>{elem.surname}</td>
              <td>
                <input
                  className='input'
                  name="days"
                  value={text[index].days}
                  onChange={(e) => handleEditInput(e, index)}
                  type="number"
                />
              </td>
              <td>
                <input
                  className='input'
                  name="salaryPerDay"
                  value={text[index].salaryPerDay}
                  onChange={(e) => handleEditInput(e, index)}
                  type="number"
                />
              </td>
              <td>{text[index].days * text[index].salaryPerDay}</td>
            </tr>
            
          </tbody>
        ))}
      </table>
    );
  };
export default Workers