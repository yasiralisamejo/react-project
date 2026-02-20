import { useState } from 'react'
import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
 
import './App.css'

function App() {
 

  return (
    <>
       <h1 className="text-3xl font-bold underline text-red-500  text-center">Hello World</h1>
       <AddTodo />
        <Todos />
    </>
  )
}

export default App
