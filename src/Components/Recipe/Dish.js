import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {Markup} from 'interweave'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Container } from '@material-ui/core'
// import Image from 'material-ui-image'
import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
// import './dish.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 50,
  },
  title:{
    fontWeight: 700,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: 10,
  },
  mediaroot:{
    display: "flex",
    height: 400,
  },
  details:{
    display: 'flex',
    flexDirection: 'column',
    padding: "95px 0",
    width: "50%"
  },
  content: {
    flex: '1 1 auto',
  },
  media:{
    height: "100%",
    width: "50%",
  },
  header:{
    textDecoration: "underline",
  },
  summary:{
    padding: 60,
    margin: "0 auto",
    border: "2px solid #ffda07",
  },
  serving:{
    padding: "0.25rem 0.5rem",
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    width: 80,
    textAlign: "center",
    fontSize: 12,
    margin: "0 auto",
  },
  prep:{
    margin: "0 auto",
    textAlign: "center",
    padding: "10px 0"
  },
  bullet:{
    textAlign: "left",
    width: 700,

  }
});

const Dish = () => {
const classes = useStyles();
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
      }, [url]);
    
    
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
        
        <div className={classes.root} key={recipe.id}>
          <Container>
            <Card className={classes.mediaroot}>
                  <CardMedia image= {recipe.image} title={recipe.title} className={classes.media} />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography
                  className={classes.title}
                  variant="h4"
                  align="center"
                  >
                    {recipe.title}
                  </Typography>
                  <br/>
                  <Typography variant="body1" className= {classes.serving}>
                  Serves {recipe.servings}
                  </Typography>
                  
                  <Typography variant="body1" className={classes.prep}>
                  Prep time: {recipe.readyInMinutes} minutes
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <Grid container spacing = {2}>
            <br/><br/>
              <Grid item xs={12} align= "center">
            <br/> <br/>
            <Typography className= {classes.summary} variant="body1">
            <Markup content ={recipe.summary} />
            </Typography>
            
            <br/><br/>
            <div className={classes.bullet}>
            <Typography variant="h5">
            Ingredients
            </Typography>
            <Typography variant="body1" >
            <ul>
            {ingredients}
            </ul>
            </Typography>
            <br/>
            <Typography
            variant="h5">
            Steps
            </Typography>
            <Typography variant="body1" className={classes.bullet}>
            <Markup content={recipe.instructions}/>
            </Typography>
            </div>
            </Grid>
        </Grid>
        </Container>
        </div>
        
    )
}

export default Dish
