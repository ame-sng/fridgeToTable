import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RandomRecipeCard from './RandomRecipeCard'
import { CardDeck } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const RandomRecipes = () => {
    const [listRecipes, setListRecipes] = useState([])
    const [status, setStatus] = useState("idle")
    const url = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${process.env.REACT_APP_APIKEY}`
    
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
            console.log("Recipes: ", data.recipes);
            setListRecipes(data.recipes);
          })
          .catch((error) => {
            setStatus("error");
          });
      }, []);
    
    const ShowRecipes = () => {
        if (status === "idle") {
            return "";
          }
      
          if (status === "pending") {
            return "Loading...";
          }
      
          if (status === "error") {
            return "Error Loading";
          }
          else{
            console.log("ShowRecipes working")
            return (listRecipes.map((recipe)=>
                {return <RandomRecipeCard recipe={recipe} />} 
               )) 
          }
  
    }
        
        

    return (
        <div>
            <CardDeck>
           <ShowRecipes />
            </CardDeck>
        </div>
    )
}

export default RandomRecipes
