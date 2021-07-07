import React from 'react'
import { Link } from 'react-router-dom'
// import { Card, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      height: 300,
    },
    media: {
      height: 150,
    },
    cardContent:{
        height: 100,
    },
    cardHeader:{
    fontFamily: "Futura",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
    },
    btn:{
    backgroundColor: "black",
    margin: "0 auto",
    display: "flex",
    fontFamily: "Futura",
    fontWeight: 700,
    fontSize: 8,
    letterSpacing: 1,
    borderRadius: 0,
    padding: '0.5rem 1.5rem',
    '&:hover':{
      backgroundColor: '#302903',
    },
    },
  });

const RecipeCard = ({recipe}) => {
    const classes = useStyles();
        return (
            <>
            <Grid item xs={4} md={3} lg={3}>
            <Link to={"/recipes/" + recipe.id}>
            <Card key={recipe.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={recipe.image}
                  title={recipe.title}
                  />
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardHeader} gutterBottom variant="body1">
                    {recipe.title}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button className={classes.btn}>
                <Link to={"/recipes/" + recipe.id} style={{ color: "white" }}>See Recipe</Link>
                </Button>
              </CardActions>
              </CardActionArea>
            </Card>
             </Link>
            </Grid>
            </>
        )
    }

export default RecipeCard





// const RecipeCard = ({recipe}) => {
// const missingIng = recipe.missedIngredients.map((missing)=> <li>{missing.name}</li>)
//     return (
//         <div className= "recipeCard" key={recipe.id}>
//             <img src={recipe.image} alt={recipe.title}></img>
//             <h2>{recipe.title}</h2>
//             <p>Missing Ingredients:</p>
//             <ul>
//             {missingIng}
//             </ul>
//             <button><Link to={"/recipes/" + recipe.id}>See Recipe</Link></button>
//         </div>
//     )
// }

 // <Card className= "recipeCard" key={recipe.id}>
            //     <Card.Img variant="top" src={recipe.image} alt={recipe.title}/>
            //    <Card.Body>
            //     <Card.Title>{recipe.title}</Card.Title>
            //     <Card.Text>Missing Ingredients:</Card.Text>
            //     <ul>
            //     {missingIng}
            //     </ul>
            //     <Button variant="primary"><Link to={"/recipes/" + recipe.id}>See Recipe</Link></Button>
            //    </Card.Body>
            // </Card>