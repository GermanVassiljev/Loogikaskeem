//import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isTest, setTest] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [elements, setElements] = useState([]);
  const [isSelected, setSelected] = useState(true);
  const [isLogmath, setLogmath] = useState(1);

  function handleFormSubmit(event) {
    if (isLogmath < 32) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedOption = formData.get('logmath');
    try {
      const selectedOperator = formData.get('operator');
      if  (selectedOperator === "not"){
        setSelected(false);
      }
      else{
        setSelected(true);
      }
    }
    catch{

    }
    setSelectedValue(selectedOption);
    setTest(true);
    CreateGroup();
    }
    else {
      event.preventDefault();
    }
  }

  function CreateGroup(){
    for (let i = 0; i < isLogmath; i++) {
      const Div = (
          <div key={elements.length} style={{border: "1pt solid Black"}}>
            <select name='logmath' id={`bool_${elements.length + 1}`}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <select name='operator' id='oper'>
              <option value="and">AND</option>
              <option value="or">OR</option>
              <option value="not">NOT</option>
            </select>
            {isSelected && 
            <select name='logmath' id={`bool_${elements.length + 2}`}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>}
          </div>
      );
      
      setElements([...elements,Div])
    }
    setLogmath(isLogmath * 2)
  }

  return (
    <div>
      <header>
        <h1>Ülalt-alla loogiskaskeem</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
          <div className="choise">
            <table>
              {!isTest ? (
                <tr>
                  <th>
                    <label htmlFor="bool1">Choose final value:</label>
                    <select name="logmath" id="bool1">
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                    </th>
                    <th>
                      <input type="submit" id="layer" value="Ready" />
                    </th>
                </tr>
              ) : (
                <div>
                  <tr>
                  {selectedValue !== null && (
                    <th>
                      <p>{selectedValue}</p>
                    </th>
                  )}
                  </tr>
                  <tr>
                    <th><input type="submit" id="layer" value="Ready" /></th>
                  </tr>
                  {elements.map((element, index) =>(
                      <tr key={index}>
                        <td>{element}</td>
                      </tr>
                  ))}
                </div>)}  
                <label>{isLogmath}</label>
            </table>    
          </div>
        </form>
    </div>
  );
}

export default App;
