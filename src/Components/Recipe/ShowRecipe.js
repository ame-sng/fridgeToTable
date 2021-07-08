import React from 'react'
import RecipeCard from './RecipeCard';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    message: {
      margin: "0 auto",
    },
  });

const ShowRecipe = ({recipes, status}) => {
    const classes = useStyles();
    if (status === "idle") {
      return "";
    }

    if (status === "pending") {
      return <CircularProgress color="black" className={classes.message}/>
    }

    if (status === "norecipes"){
        return <Typography
        className={classes.message}
        variant="h6"
        gutterBottom>
        There are no recipes matching your request, please try again.
        </Typography>
    }

    if (status === "error") {
      return <Typography
      className={classes.message}
      variant="h4"
      gutterBottom>
      Error: recipes can't be loaded.
      </Typography>
    } else {
      console.log("showRecipe working");
      return recipes.map((recipe) => {
        return <RecipeCard recipe={recipe}/>;
      });
    }
  };


export default ShowRecipe
