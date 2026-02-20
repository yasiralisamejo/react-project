import { useState } from 'react'
 
import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Login from './componets/Login'
import Profile from './componets/Profile'

function App() {
   return (
    <UserContextProvider>
    <h1>Context API Example</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
