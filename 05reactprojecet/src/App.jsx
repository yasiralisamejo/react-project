import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colorchange from './componants/Colorchange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Colorchange/>
    </>
  )
}

export default App
