import { useState } from 'react'
import Todo from'./Compo/TodoList'
import Temp from './Compo/TemperatureConverter'
import Search from './Compo/SearchAndFilter'
import Shopping from './Compo/ShoppingCart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todo></Todo>
        <br></br>
        <Temp></Temp>
        <br/>
        <Search/>
        <br/>
        <Shopping/>
      </div>
      
    </>
  )
}

export default App
