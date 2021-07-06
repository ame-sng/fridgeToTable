// import React from 'react'

// const RecipeList = ({title, image}) => {
//     return (
//         <div>
//            <img src={image} alt="{title}"></img>
//            <p>{title}</p>
//         </div>
//     )
// }

// export default RecipeList



// import React from "react";
// import RecipeList from "./Test/RecipeList";
// import { useState, useReducer, useEffect} from "react";

// const ACTIONS = {
//   GET_RECIPES: "get-recipes"
// }

// const reducer = (state, action) => {
//   switch(action.type){
//     case ACTIONS.GET_RECIPES:
//       return {...state, 
//           recipeByIng: action.payload}
//   }
// }
// ///////////////////////////////////


// const FetchRecipes = () => {
//   const [state, dispatch] = useReducer(reducer, {
//       recipeByIng: [],
//       recipeById: []})
//       const value = { state, dispatch, ACTIONS}


// const initialState = {
//   recipeByIng: [],
//   recipeById: []
// }


  
  




// const Form = ({value}) => {
//   const [status, setStatus] = useState(initialState)
//   const [recipes, setRecipes] = useState([])
//   const [ingredients, setIngredients] = useState("")
  
  
//   const handleChange = (event) =>{
//     setIngredients(event.target.value)
//   }

//   const getRecipes = () =>{
//     setStatus(...initialState,
//       recipeByIng: )
//     setIngredients("")
//   }
  
//   console.log (status)

//   return (
//     <div>
//       Add your ingredient: <input
//       type="text"
//       value={ingredients}
//       placeholder="Apples, Flour, Sugar"
//       onChange= {handleChange} />
//       <button onClick={getRecipes}>Show Me Recipes</button>
//       <br/> <br/>
//       <div>Recipes: </div>
//       <div>{showRecipes(status)}</div>
//     </div>
    
//   );
// };

// export default Form;
