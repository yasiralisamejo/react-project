 
import './App.css'
import Meals from './components/Meals'
import MealContextProvider from './context/MealContextProvider'


function App() {
  
  return (
    <MealContextProvider>

       <Meals/>
      
    </MealContextProvider>
  )
}

export default App
