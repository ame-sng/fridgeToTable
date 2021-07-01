import React from 'react'
import { useState, useEffect } from 'react'



//EXAMPLE = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${process.env.REACT_APP_APIKEY}`

//const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients={VALUE}&ranking=2&apiKey=${apikey}`

// const value = "apples,+flour,+sugar"
// const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${value}&ranking=2&apiKey=925c36ae200448dda7bbde41b0911b40`

// fetch(url)
// .then((res)=> res.json())
// .then((data)=> console.log("recipe: ", data.id))


const Apitest = () => {
const [status, setStatus] = useState("idle")
const [recipe, setRecipe]= useState("")

const value = "apples,+flour,+sugar"
const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${value}&ranking=2&apiKey=${process.env.REACT_APP_APIKEY}`

// console.log(url)

useEffect(()=>{
    setStatus("pending")
    // fetch(url)
    .then((res)=>{
        if (res.ok) {
            return res.json()
        }
        throw new Error("Bad Response from Server");
    })
    .then((data)=>{
        setStatus("resolved")
        console.log("recipe: ", data)
        setRecipe(data[0].title)
    })
    .catch((error)=>{
        setStatus("error")
    })
}, [])

const showRecipe = (status) => {
    if (status === "idle") {
        return "Please enter an ingredient"
      }
  
      if (status == "pending") {
        return "Loading..."
      }
  
      if (status === "resolved") {
        return recipe;
      }
  
      if (status === "error") {
        return recipe;
      }
}

    return (
        <div>
           <p>Recipe: {showRecipe(status)}</p>
        </div>
    )
}

export default Apitest

