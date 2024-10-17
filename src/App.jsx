import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './useEffect'
import Friends from './useEffect2'

function App() {
  function handleClick (){
    alert('Click Button')
  }

  const addToFive = (number) => {
    alert(number + 5 );
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react " alt="React logo" />
        </a>
      </div>
      <h2>React Core Concepts 2</h2>

      <button onClick={handleClick} > Click Me </button>
      <button onClick={ () => {alert('Click Inline Function')}}>Inline function</button>
      <button onClick={() => {addToFive(6)}}> Add to Five </button>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
      
      
    </>
  )
}

export default App
