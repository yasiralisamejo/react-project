import React from 'react';

import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card';

function App() {
  const [count, setCount] = useState(0)

  let myObjt={
    UserName :"yasir",
    age:14
  }

  return (
    <>
    <h1 className='bg-green-400 text-blacl p-4
     rounded-xl mb-4'>tailwind test</h1>

     <Card/>
     <Card UserName={"ali"} btn ={"paisa"}/>
     <Card/>
     <Card/>
    </>
  )
}

export default App
