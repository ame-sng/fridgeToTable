import React, {useState, useEffect} from 'react'
import ShowRecipeCards from './ShowRecipeCards';
import Grid from '@material-ui/core/Grid';



const RandomRecipes = () => {
    
    const [listRecipes, setListRecipes] = useState([])
    const [status, setStatus] = useState("idle")
    const key = process.env.REACT_APP_APIKEY
    const url = `https://api.spoonacular.com/recipes/random?number=8&apiKey=${key}`
    
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
      }, [url]);
        

    return (
        <div>
            <Grid container spacing={2}>
           <ShowRecipeCards listRecipes={listRecipes} status={status} />
            </Grid> 
        </div>
    )
}

export default RandomRecipes
