import { useState } from 'react'
import reactLogo from './assets/react.svg'
 import Chai from'./chai'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
      const userName= "yasir ali "
  return (
    

  <>

  <h1>chai or react or {userName}</h1>
    <Chai/>

  </>
  )
}

export default App
