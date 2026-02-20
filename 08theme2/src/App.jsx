import React ,{ useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theem'
import { useEffect } from 'react'
import Theme from './components/Theme.jsx'
import Card from './components/Card.jsx'


function App() {
  const [themeMode , setThemeMode] =useState("light");
  

  const lightTheme =()=>{
    setThemeMode("light");
  }
  const darkTheme =()=>{
    setThemeMode("dark");
  }
   
  // actual change theem in javascript 

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");

    document.querySelector("html").classList.add(themeMode);

  },[themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
       <div className="flex flex-wrap min-h-screen item-center">
        <div className="w-full">
          <div className=" w-full max-w-sm mx-auto flex justify-end mb-4">
          <Theme/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
       </div>
      </ThemeProvider>
    </>
  )
}

export default App
