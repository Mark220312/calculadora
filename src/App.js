import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display value={input} />
        <div className="buttons">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '=', '/'].map((label) => (
            <Button key={label} label={label} onClick={label === '=' ? handleCalculate : label === 'C' ? handleClear : handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
