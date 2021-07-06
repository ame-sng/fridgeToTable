import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {Markup} from 'interweave'

const Dish = (props) => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([])
    const [status, setStatus] = useState("idle")
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    
    useEffect(() => {
        setStatus("pending");
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Bad Response from Server");
          })
          .then((data) => {
            setStatus("resolved");
            console.log("Recipe: ", data);
            setRecipe(data);
          })
          .catch((error) => {
            setStatus("error");
          });
      }, [id]);
    
    
        if (status === "idle") {
          return "Please enter an ingredient";
        }
    
        if (status === "pending") {
          return "Loading...";
        }
    
        if (status === "error") {
          return "Error Loading";
        }
        
        console.log(recipe.summary)

        const ingredients = recipe?.extendedIngredients?.map((ing)=> <li>{ing.original}</li>)


    return (
        
        <div>
            <img src= {recipe.image} alt={recipe.title}></img>
            <h2>{recipe.title}</h2>
            <Markup content ={recipe.summary} />
            <br/>
            <h3>Recipe</h3>
            <p>Prep time: {recipe.readyInMinutes} minutes</p>
            <p>Serves {recipe.servings}</p>
            <p><b>Ingredients</b></p>
            <ul>
            {ingredients}
            </ul>
            <h3>Instructions</h3>
            <Markup content={recipe.instructions}/>
        </div>
        
        
    )
}

export default Dish
