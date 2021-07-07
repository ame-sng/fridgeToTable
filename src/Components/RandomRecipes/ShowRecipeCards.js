import React from 'react'
import RandomRecipeCard from './RandomRecipeCard';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  message: {
    margin: "0 auto",
  },
});
const ShowRecipeCards = ({listRecipes, status}) => {
  const classes = useStyles();
    if (status === "idle") {
        return "";
      }
  
      if (status === "pending") {
        return <Typography
        className={classes.message}
        variant="h4"
        gutterBottom>
        Recipes Loading...
        </Typography>;
      }
  
      if (status === "error") {
        return <Typography
        className={classes.message}
        variant="h4"
        gutterBottom>
        Error: recipes can't be loaded.
        </Typography>
      }
      else{
        console.log("ShowRecipeCards working")
        return (listRecipes.map((recipe)=>
            {return <RandomRecipeCard recipe={recipe} key={recipe.id}/>} 
           )) 
      }

}
    

export default ShowRecipeCards
