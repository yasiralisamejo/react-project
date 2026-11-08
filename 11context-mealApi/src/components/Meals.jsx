import React, { useContext, useState } from 'react';
import MealContext from '../contexts/MealContext';  // ✅ 'contexts' (plural)

function Meals() {
    const { meals, load, fetchMeals } = useContext(MealContext);
    const [search, setSearch] = useState("");
    
    const handleSearch = (e) => {
        fetchMeals(search);
    }
    
    return (
        <> 
            <h1 style={{ backgroundColor: "lightgray", textAlign: "center" }}>
                Meals Api Fetching!
            </h1>
            <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Enter your meal (e.g., chicken, rice)'
                style={{ width: "70%", padding: "12px 18px", borderRadius: "8px" }}
            />
            <button 
                onClick={handleSearch} 
                style={{ padding: "10px 18px", borderRadius: "8px", marginLeft: "10px", backgroundColor: "lightblue" }}
            >
                Search
            </button>
            
            {load ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    {meals && meals.length > 0 ? (
                        meals.map((meal) => (
                            <div key={meal.idMeal} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                                <h3>{meal.strMeal}</h3>
                                <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
                                <p><strong>Category:</strong> {meal.strCategory}</p>
                                <p><strong>Area:</strong> {meal.strArea}</p>
                            </div>
                        ))
                    ) : (
                        <h3>No meals found. Try searching for "chicken", "rice", "pasta", etc.</h3>
                    )}
                </div>
            )}
        </>
    )
}

export default Meals;