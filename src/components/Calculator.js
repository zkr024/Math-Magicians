import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    let information = {};
    const value = (e) => {
      const data = e.target.innerHTML;
      information = calculate(this.state, data);
      this.setState(information);
    };

    const { total, next, operation } = this.state;

    return (
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
    );
  }
}

export default Calculator;
