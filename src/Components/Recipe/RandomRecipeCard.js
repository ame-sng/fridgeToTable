import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const RandomRecipeCard = ({recipe}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }} className= "recipeCard" key={recipe.id}>
            <Card.Img variant="top" src={recipe.image} alt={recipe.title}/>
           <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Button variant="dark"><Link to={"/recipes/" + recipe.id}>See Recipe</Link></Button>
           </Card.Body>
            </Card>
        </div>
    )
}

export default RandomRecipeCard

