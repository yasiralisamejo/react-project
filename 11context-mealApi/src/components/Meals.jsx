import React ,{useContext, useState}from 'react'
import MealContext from '../context/MealContext'
 

function Meals() {
    const {meals ,load , fetchMeals} = useContext(MealContext)
    const [search , setSearch] = useState("")
    const handleSearch= (e)=>{
        fetchMeals(search)
    }
  return (
    <> 
    <h1 style={{backgroundColor :"lightgray", textAlign :"center"}}>Meals Api Fetching!</h1>
    <input type="text" value={search}
    onChange={((e)=>setSearch(e.target.value))}
    placeholder='enter yoyr meal '
    style={{width:"70%", padding:"12px 18px", borderRadius:"8px"}}
    id=''/>
    <button onClick={handleSearch} style={{padding:"10px 18px", borderRadius:"8px", marginLeft:"10px", backgroundColor:"lightblue",}}>Search</button>
    {
        load ? <h2>Loading...</h2> :
        <div>
            {
                meals.map((meal)=>{
                    return <div key={meal.idMeal} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"200px"}}/>
                    </div>
                })
            }
        </div>
    }
    </>
  )
}

export default Meals