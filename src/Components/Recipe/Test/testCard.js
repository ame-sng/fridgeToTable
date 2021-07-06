const RecipeCard = ({recipe}) => {
    const missingIng = recipe.missedIngredients.map((missing)=> <li>{missing.name}</li>)
        return (
            <Card className= "recipeCard" key={recipe.id}>
               <Card.Body>
                <Card.Img variant="top" src={recipe.image} alt={recipe.title}/>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>Missing Ingredients:</Card.Text>
                <ul>
                {missingIng}
                </ul>
                <Button variant="primary"><Link to={"/recipes/" + recipe.id}>See Recipe</Link></Button>
               </Card.Body>
            </Card>
        )
    }