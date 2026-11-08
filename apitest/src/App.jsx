import { useState } from 'react'
import './App.css'
import Meals from './components/Meals'  // ✅ Sahi path
import MealContextProvider from './contexts/MealContext'  // ✅ Context import karo

function App() {
  return (
    <MealContextProvider>  {/* ✅ Sahi tarika */}
      <Meals/>
    </MealContextProvider>
  )
}

export default App