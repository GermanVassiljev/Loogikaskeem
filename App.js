import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isTest, setTest] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [elements, setElements] = useState([]);
  const [isSelected, setSelected] = useState(true)

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedOption = formData.get('logmath');
    setSelectedValue(selectedOption);
    setTest(true);
    CreateGroup();
  }

  const CheckNOT = (event) => {
    const selectedValue = event.target.value;

    if  (selectedValue === "not"){
      setSelected(false);
    }
    else{
      setSelected(true);
    }
  };

  function CreateGroup(){
    const Div = (
      <form>
        <div key={elements.length} style={{border: "1pt solid Black"}}>
          <select name='logmath' id='bool_1'>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <select name='operator' id='oper' onChange={CheckNOT}>
            <option value="and">AND</option>
            <option value="or">OR</option>
            <option value="not">NOT</option>
          </select>
          {isSelected && 
          <select name='logmath' id='bool_2'>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>}
          
        </div>
      </form>
    );
    

    setElements([...elements,Div])
  }

  return (
    <div>
      <header>
        <h1>Ülalt-alla loogiskaskeem</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <div className="choise">
          {!isTest ? (
            <div>
              <label htmlFor="bool1">Choose final value:</label>
              <select name="logmath" id="bool1">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <input type="submit" id="layer1" value="Ready" />
            </div>
          ) : (
            <div>
              {selectedValue !== null && (
                <div>
                  <p>{selectedValue}</p>
                </div>
              )}
              {elements.map((element, index) =>(
                <div key={index}>{element}</div>
              ))}
            </div>)}
        </div>
      </form>
    </div>
  );
}

export default App;