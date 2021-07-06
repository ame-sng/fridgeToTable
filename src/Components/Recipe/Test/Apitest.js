import React from 'react'
// import { useState, useEffect } from 'react'
import recipeCards from '../../data/cardsData'
import RecipeList from '../RecipeList'
import ShowRecipes from '../Form'


//EXAMPLE = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${process.env.REACT_APP_APIKEY}`

//const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients={VALUE}&ranking=2&apiKey=${apikey}`

// const value = "apples,+flour,+sugar"
// const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${value}&ranking=2&apiKey=925c36ae200448dda7bbde41b0911b40`


const Apitest = () => {
// const [status, setStatus] = useState("idle")
// const [recipeData, setRecipeData]= useState("")
// const key=process.env.REACT_APP_APIKEY
const recipes = recipeCards.results.map((result)=> (<RecipeList image={result.image} title={result.title} />))

// <RecipeList image={result.image} title={result.title} />

// const url = `https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&number=2&apiKey=${key}`

// console.log(url)

// useEffect(()=>{
//     setStatus("pending")
//     fetch(url)
//     .then((res)=>{
//         if (res.ok) {
//             return res.json()
//         }
//         throw new Error("Bad Response from Server");
//     })
//     .then((data)=>{
//         setStatus("resolved")
//         console.log("2 recipe cards: ", data)
//         setRecipeData(data)
//     })
//     .catch((error)=>{
//         setStatus("error")
//     })
// }, [])

// const showRecipeData = (status) => {
//     if (status === "idle") {
//         return "Please enter an ingredient"
//       }
  
//       if (status === "pending") {
//         return "Loading..."
//       }
  
//       if (status === "resolved") {
//         return recipeData.results[0].title;
//       }
  
//       if (status === "error") {
//         return recipeData.results[0].title;
//       }
// }

    return (
        <div>
           {/* <p>Recipe: {showRecipeData(status)}</p> */}
           <ShowRecipes />
           <h1>Recipe:</h1>
           <div> {recipes} </div>
        </div>
    )
}

export default Apitest

