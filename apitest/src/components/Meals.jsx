import React, { useContext, useState } from 'react';
import MealContext from '../contexts/MealContext';

function Meals() {
    const { meals, load, fetchMeals } = useContext(MealContext);
    const [search, setSearch] = useState("");
    
    const handleSearch = () => {
        fetchMeals(search);
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    
    return (
        <> 
            <h1 style={{ backgroundColor: "lightgray", textAlign: "center", padding: "20px" }}>
                🍽️ Meals API Fetching!
            </h1>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Enter your meal (e.g., chicken, rice)'
                    style={{ width: "60%", padding: "12px 18px", borderRadius: "8px", fontSize: "16px" }}
                />
                <button 
                    onClick={handleSearch} 
                    style={{ padding: "10px 25px", borderRadius: "8px", marginLeft: "10px", 
                             backgroundColor: "lightblue", fontSize: "16px", cursor: "pointer" }}
                >
                    🔍 Search
                </button>
            </div>
            
            {load ? (
                <h2 style={{ textAlign: "center" }}>Loading meals... 🍔</h2>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {meals && meals.length > 0 ? (
                        meals.map((meal) => (
                            <div key={meal.idMeal} style={{ 
                                border: "1px solid #ddd", 
                                borderRadius: "10px",
                                margin: "10px", 
                                padding: "15px", 
                                width: "250px",
                                textAlign: "center",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                            }}>
                                <h3>{meal.strMeal}</h3>
                                <img src={meal.strMealThumb} alt={meal.strMeal} 
                                     style={{ width: "200px", borderRadius: "10px" }} />
                                <p><strong>Category:</strong> {meal.strCategory || "N/A"}</p>
                                <p><strong>Area:</strong> {meal.strArea || "N/A"}</p>
                            </div>
                        ))
                    ) : (
                        <h3 style={{ textAlign: "center" }}>No meals found. Try "chicken", "rice", "pasta"</h3>
                    )}
                </div>
            )}
        </>
    )
}

export default Meals;