import React,{useEffect, useState} from 'react'
import MealContext from './MealContext'

function MealContextProvider({children}) {
    const [meals ,setMeals] =useState([])
    const [load ,setLoads] = useState(true)
    const  fetchMeals = async (search="")=>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
            setMeals(data.meals||[]);
            
        } catch (e) {
            console.log("error fatched meals ",e);            
        }
        finally{
            setLoads(false)
        }
    }
    useEffect(()=>{
        fetchMeals("")
    },[])

    return (
      <MealContext.Provider value={{meals,load,fetchMeals}}>
        {children}
      </MealContext.Provider>
  )
}

export default MealContextProvider