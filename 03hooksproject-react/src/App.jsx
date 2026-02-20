import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter , setcounter] =useState(15)
  // let counter =5 ;    
   
  const addValue= ()=>{
    console.log("click the value", counter);
    if (counter <= 20) {
      setcounter(counter+1)
  }
    }    
    

  const removeValue=()=>{

    if(counter > 0){
    setcounter(counter-1)
    console.log("click the button,",counter);
  }
  
    
  }

  return (
    <> 
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}> add value {counter}</button>
    <button onClick={removeValue}> decre value</button>
     </>
  )
}

export default App
