import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './style/Calculator.css';

const Calculator = () => {
  const [details, setDetails] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total } = details;
  const { next } = details;
  const { operation } = details;

  let elements = {};
  const value = (e) => {
    const data = e.target.innerHTML;
    elements = calculate(details, data);
    setDetails(elements);
  };

  return (
    <div className="container">
      <h2 className="title">Let&apos;s do some math</h2>
      <div className="calculator">
        <div className="calculator-grid">
          <div className="output">
            <div className="content">{total !== null && operation == null ? total : next}</div>
          </div>
          <button type="button" onClick={value}>AC</button>
          <button type="button" onClick={value}>+/-</button>
          <button type="button" onClick={value}>%</button>
          <button type="button" onClick={value} className="operator">÷</button>
          <button type="button" onClick={value}>7</button>
          <button type="button" onClick={value}>8</button>
          <button type="button" onClick={value}>9</button>
          <button type="button" onClick={value} className="operator">x</button>
          <button type="button" onClick={value}>4</button>
          <button type="button" onClick={value}>5</button>
          <button type="button" onClick={value}>6</button>
          <button type="button" onClick={value} className="operator">-</button>
          <button type="button" onClick={value}>1</button>
          <button type="button" onClick={value}>2</button>
          <button type="button" onClick={value}>3</button>
          <button type="button" onClick={value} className="operator">+</button>
          <button type="button" onClick={value} className="zero">0</button>
          <button type="button" onClick={value}>.</button>
          <button type="button" onClick={value} className="operator">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
