import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [prevResult, setPrevResult] = useState(0)

  function ResetAll() {
    setResult(result => 0);
    setPrevResult(prevResult => 0)
  }

  function HandleInput(event) {
    const value = event.target.textContent;

    setResult(result => +(result + value));
  }

  function Operation(event) {
    setPrevResult(prevResult => result);
    const value = event.target.textContent;
    setResult(result => value);
  }


  return (
    <>
      <div id="calculator">
        <div className="display-area">
          <div id="display-calcs">{prevResult}</div>
          <div id="display">{result}</div>
        </div>
        <div className='main-area'>
          <button id="clear" onClick={ResetAll}>AC</button>
          <button id="divide" onClick={Operation}>/</button>
          <button id="multiply" onClick={Operation}>X</button>
          <button className="numbers" id="seven" onClick={HandleInput}>7</button>
          <button className="numbers" id="eight" onClick={HandleInput}>8</button>
          <button className="numbers" id="nine" onClick={HandleInput}>9</button>
          <button id="subtract" onClick={Operation}>-</button>
          <button className="numbers" id="four" onClick={HandleInput}>4</button>
          <button className="numbers" id="five" onClick={HandleInput}>5</button>
          <button className="numbers" id="six" onClick={HandleInput}>6</button>
          <button id="add" onClick={Operation}>+</button>
          <button className="numbers" id="one" onClick={HandleInput}>1</button>
          <button className="numbers" id="two" onClick={HandleInput}>2</button>
          <button className="numbers" id="three" onClick={HandleInput}>3</button>
          <button id="equals">=</button>
          <button className="numbers" id="zero" onClick={HandleInput}>0</button>
          <button className="numbers" id="decimal">.</button>
        </div>
      </div>
      <p id='copyright'>
        Designed and Coded By Nurlan Khammadli
      </p>
    </>
  )
}

export default App


// {<button onClick={() => setCount((count) => count + 1)}>
// count is {count}
// </button> }