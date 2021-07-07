import React, { useEffect } from "react";
import ShowRecipe from "./ShowRecipe";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { FormControl } from "@material-ui/core";
import {Select} from '@material-ui/core'
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


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
    padding: '0.5rem 1.5rem',
    '&:hover':{
      backgroundColor: '#302903',
  }
  },
  field: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  formControl:{
    minWidth: 120,
  },
});

const InputForm = () => {

  const {ingredients, cuisine, type} = useParams();
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState("idle");
  const [addValue, setAddValue] = useState({
  ingredients: "",
  type: "",
  cuisine:"",
})

  const [link, setLink] = useState({})

  const handleChange = (event) => {
    setAddValue({...addValue,
      ingredients: event.target.value})
      console.log("ingredients added: ", addValue)
  };

  const cuisineChange=(event) => {
    setAddValue({...addValue,
      cuisine: event.target.value})
      console.log("cuisine added: ",addValue)
  }

  const typeChange=(event) => {
    setAddValue({...addValue,
      type: event.target.value})
      console.log("type added: ",addValue)
  }
  const getRecipes = () => {
    setLink(addValue)
  };

  // const handleKeyDown = (event) =>{
  //   if(event.key === "Enter"){
  //     getRecipes();
  //     console.log("enter key works")
  //   }
  // }

  // const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fetchAPI}&number=8&ranking=2&apiKey=${process.env.REACT_APP_APIKEY}`;

  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${link.ingredients}&number=2&instructionsRequired=true&cuisine=${link.cuisine}&type=${link.type}&apiKey=${process.env.REACT_APP_APIKEY}`

  useEffect(() => {
    if(addValue.ingredients === "" && addValue.cuisine === "" && addValue.type === ""){
      return
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
        data.results.length === 0 ? setStatus("norecipes") : setStatus("resolved");
        console.log("2 recipe cards: ", data.results.length);
        setRecipes(data.results);
      })
      .catch((error) => {
        setStatus("error");
      });
    }, [link]);

  return (
    <div>
      <div className={classes.header}>
        <Typography
          className={classes.h1}
          variant="h3"
          align="center"
          gutterBottom
        >
          What's in your fridge?
        </Typography>
        <Typography
        variant="h6"
        align="center"
        gutterBottom>
        Type in your available ingredients
        </Typography>
        <Container>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Apples, Flour, Sugar"
              value={addValue.ingredients}
              onChange={handleChange}
              // onKeyDown={handleKeyDown}
            />
          </form>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={addValue.cuisine}
          onChange={cuisineChange}
        >
          <MenuItem value={"African"}>African</MenuItem>
          <MenuItem value={"American"}>American</MenuItem>
          <MenuItem value={"British"}>British</MenuItem>
          <MenuItem value={"Cajun"}>Cajun</MenuItem>
          <MenuItem value={"Caribbean"}>Caribbean</MenuItem>
          <MenuItem value={"Chinese"}>Chinese</MenuItem>
          <MenuItem value={"Eastern European"}>Eastern European</MenuItem>
          <MenuItem value={"European"}>European</MenuItem>
          <MenuItem value={"French"}>French</MenuItem>
          <MenuItem value={"German"}>German</MenuItem>
          <MenuItem value={"Greek"}>Greek</MenuItem>
          <MenuItem value={"Indian"}>Indian</MenuItem>
          <MenuItem value={"Irish"}>Irish</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Japanese"}>Japanese</MenuItem>
          <MenuItem value={"Jewish"}>Jewish</MenuItem>
          <MenuItem value={"Korean"}>Korean</MenuItem>
          <MenuItem value={"Latin American"}>Latin American</MenuItem>
          <MenuItem value={"Mediterranean"}>Mediterranean</MenuItem>
          <MenuItem value={"Mexican"}>Mexican</MenuItem>
          <MenuItem value={"Middle Eastern"}>Middle Eastern</MenuItem>
          <MenuItem value={"Nordic"}>Nordic</MenuItem>
          <MenuItem value={"Southern"}>Southern</MenuItem>
          <MenuItem value={"Spanish"}>Spanish</MenuItem>
          <MenuItem value={"Thai"}>Thai</MenuItem>
          <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={addValue.type}
          onChange={typeChange}
        >
          <MenuItem value={"main course"}>Main Course</MenuItem>
          <MenuItem value={"side dish"}>Side Dish</MenuItem>
          <MenuItem value={"dessert"}>Dessert</MenuItem>
          <MenuItem value={"appetizer"}>Appetizer</MenuItem>
          <MenuItem value={"salad"}>Salad</MenuItem>
          <MenuItem value={"bread"}>Bread</MenuItem>
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"soup"}>Soup</MenuItem>
          <MenuItem value={"beverage"}>Beverage</MenuItem>
          <MenuItem value={"sauce"}>Sauce</MenuItem>
          <MenuItem value={"marinade"}>Marinade</MenuItem>
          <MenuItem value={"fingerfood"}>Fingerfood</MenuItem>
          <MenuItem value={"snack"}>Snack</MenuItem>
          <MenuItem value={"drink"}>Drink</MenuItem>
        </Select>
      </FormControl>
      <br/> <br/>
        
      
            <Button
            className={classes.btn}
            style={{ color: "white" }}
            variant="primary"
            onClick={getRecipes}
            >
            Show Me Recipes
          </Button>
      
            
        </Container>
      </div>
      <br /> <br />
        <Container>
          <Grid container spacing={2}>
            <ShowRecipe recipes={recipes} status={status}/>
        </Grid>
        </Container>
    </div>
  );
};

export default InputForm;