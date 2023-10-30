"use client";
import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData);
        }

        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className='font-comic-sans text-6xl'>Potential Meals</h1>
            <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>
                    <div>
                        <p>{meal.strMeal}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}