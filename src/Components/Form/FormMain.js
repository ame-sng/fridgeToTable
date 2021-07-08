import React, { useEffect } from "react";
import ShowRecipe from "../Recipe/ShowRecipe";
import FormQuery from "./FormQuery";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useHistory, useRouteMatch, useLocation } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  h1: {
    marginTop: 15,
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#ffda07",
    padding: 50,
  },
  btn: {
    backgroundColor: "black",
    margin: "0 auto",
    marginBottom: 20,
    display: "flex",
    fontFamily: "Futura",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 1,
    borderRadius: 0,
    padding: "0.5rem 1.5rem",
    "&:hover": {
      backgroundColor: "#302903",
    },
  },
  field: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  select: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    width: 250,
    margin: 20,
    marginTop: 0,
  },

});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FormMain = () => {
  // let {path, URL} = useRouteMatch()
  let history = useHistory();
  const location = useLocation();
  // console.log("useParams: ", useParams());
  // console.log("useLocation: ", useLocation());
  console.log("useRouteMatch: ", useRouteMatch())
  let query = useQuery();


  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState("idle");
  const [addValue, setAddValue] = useState({
    ingredients: query.get("ingredients"),
    type: query.get("type"),
    cuisine: query.get("cuisine"),
  });

  // const [link, setLink] = useState({});

  const handleChange = (event) => {
    setAddValue({ ...addValue, ingredients: event.target.value });
    console.log("ingredients added: ", addValue);
  };

  const cuisineChange = (event) => {
    setAddValue({ ...addValue, cuisine: event.target.value });
    console.log("cuisine added: ", addValue);
  };

  const typeChange = (event) => {
    setAddValue({ ...addValue, type: event.target.value });
    console.log("type added: ", addValue);
  };
  const getRecipes = () => {
    // setLink(addValue);
    history.push(`recipes?ingredients=${addValue.ingredients}&cuisine=${addValue.cuisine}&type=${addValue.type}`)
    
  };

  
  // const addIng = link.ingredients;
  // const addCuisine = link.cuisine;
  // const addType = link.type;

  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${addValue.ingredients}&number=2&instructionsRequired=true&cuisine=${addValue.cuisine}&type=${addValue.type}&apiKey=${process.env.REACT_APP_APIKEY}`;

  // console.log("ingredients", link.ingredients);
  // console.log("cuisine", link.cuisine);
  // console.log("type", link.type);

  useEffect(() => {
    if (
      addValue.ingredients === null &&
      addValue.cuisine === null &&
      addValue.type === null
    ) {
      return;
    }
    setStatus("pending");
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        data.results.length === 0
          ? setStatus("norecipes")
          : setStatus("resolved");
        console.log("2 recipe cards: ", data.results.length);
        setRecipes(data.results);
      })
      .catch((error) => {
        setStatus("error");
      });
  }, [location]);

  return (
    <div>
      <div className={classes.header}>
        <Typography
          className={classes.h1}
          variant="h3"
          align="center"
          gutterBottom>
          What's in your fridge?
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Type in your available ingredients
        </Typography>

        <FormQuery
          addValue={addValue}
          classes={classes}
          handleChange={handleChange}
          cuisineChange={cuisineChange}
          typeChange={typeChange}/>
        <br/><br/>
        <Button
          className={classes.btn}
          style={{ color: "white" }}
          variant="primary"
          onClick={getRecipes}>
        
        Show Me Recipes
       
        </Button>
      </div>
      <br/><br/>
      <Container>
        <Grid container spacing={2}>
          <ShowRecipe recipes={recipes} status={status} />
        </Grid>
      </Container>
    </div>
  );
};

export default FormMain;
