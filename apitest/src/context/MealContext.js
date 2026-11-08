import React, { useState, useEffect, createContext } from "react";

export const MealContext = createContext();

function MealContextProvider({ children }) {
    const [meals, setMeals] = useState([]);
    const [load, setLoads] = useState(true);
    
    const fetchMeals = async (search = "") => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error("Error fetching meals:", error);
        } finally {
            setLoads(false);
        }
    };
    
    useEffect(() => {
        fetchMeals("");
    }, []);
    
    return (
        <MealContext.Provider value={{ meals, load, fetchMeals }}>
            {children}
        </MealContext.Provider>
    );
}

export default MealContextProvider;