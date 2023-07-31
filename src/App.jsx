import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="calculator">
        <div className="display-area">
          <div id="display-calcs">1</div>
          <div id="display">2</div>
        </div>
        <div className='main-area'>
          <button id="clear">AC</button>
          <button id="divide">/</button>
          <button id="multiply">X</button>
          <button className="numbers" id="seven">7</button>
          <button className="numbers" id="eight">8</button>
          <button className="numbers" id="nine">9</button>
          <button id="subtract">-</button>
          <button className="numbers" id="four">4</button>
          <button className="numbers" id="five">5</button>
          <button className="numbers" id="six">6</button>
          <button id="add">+</button>
          <button className="numbers" id="one">1</button>
          <button className="numbers" id="two">2</button>
          <button className="numbers" id="three">3</button>
          <button id="equals">=</button>
          <button className="numbers" id="zero">0</button>
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


{/* <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button> */}