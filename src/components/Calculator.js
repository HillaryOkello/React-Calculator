import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import './assets/CSS/Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const state = { total, next, operation };

    const newData = calculate(state, buttonName);
    setTotal(newData.total);
    setNext(newData.next);
    setOperation(newData.operation);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">
          <Display result={next} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default Calculator;
