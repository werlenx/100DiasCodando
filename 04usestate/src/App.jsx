import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('werlen')


  const add = () =>{
    setCount(count + 1)
    console.log(count)
  }

  const onChangeInput = (e) => {
    setValueInput(e.target.value)
  }

  return (
    
    <div className='app'>
      <h1>Front beginers</h1>
      <h3>{count}</h3>
      <button onClick={add}>Adicionar</button>
      <div>
        <input onChange={onChangeInput }></input>
      </div>
      <h3>{valueInput}</h3>

    </div>
  )
}

export default App
