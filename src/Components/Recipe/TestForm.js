// import React, { useEffect } from "react";
// import { useState } from "react";
// import RecipeCard from "./RecipeCard";
// import { Container } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import { InputAdornment } from "@material-ui/core";
// import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import { Button } from "@material-ui/core";
// import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles({
//   h1: {
//     marginTop: 15,
//     marginBottom: 20,
//   },
//   header: {
//     backgroundColor: "#ffda07",
//     padding: 50,
//   },
//   btn: {
//     backgroundColor: "black",
//     margin: "0 auto",
//     marginBottom: 20,
//     display: "flex",
//     fontFamily: "Futura",
//     fontWeight: 700,
//     fontSize: 12,
//     letterSpacing: 1,
//     borderRadius: 0,
//     padding: '0.5rem 1.5rem',
//     '&:hover':{
//       backgroundColor: '#302903',
//   }

//   },
//   field: {
//     backgroundColor: "white",
//     borderRadius: 5,
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });

// const InputForm = () => {
//     const classes = useStyles();
//     const [recipes, setRecipes] = useState([]);
//     const [status, setStatus] = useState("idle");
//     const [ingredients, setIngredients] = useState("");
//     const [fetchAPI, setFetchAPI] = useState("");
//     // const [link, setLink] = useState({
//     //   ingredients: "",
//     //   type: "",
//     //   cuisine:"",
  
//     // })
  
//     const handleChange = (event) => {
//       setIngredients(event.target.value);
//     };
  
//     const getRecipes = () => {
//       setFetchAPI(ingredients);
//       //  setIngredients("")
//       //setLink(prevState => ({
//       // ...prevState,
//       // ingredients: ingredients,
//       // type: type,
//       // cuisine: cuisie,
//       // }))
//     };
  
//     const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fetchAPI}&number=4&ranking=2&apiKey=${process.env.REACT_APP_APIKEY}`;
  
//     //const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&instructionsRequired=true&cuisine=${cuisine}&type=${type}&apiKey=${process.env.REACT_APP_APIKEY}`
  
//     useEffect(() => {
//       setStatus("pending");
//       fetch(url)
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           throw new Error("Bad Response from Server");
//         })
//         .then((data) => {
//           setStatus("resolved");
//           console.log("2 recipe cards: ", data);
//           setRecipes(data);
//         })
//         .catch((error) => {
//           setStatus("error");
//         });
//     }, [fetchAPI]);
  
//     const ShowRecipe = () => {
//       if (status === "idle") {
//         return "Please enter an ingredient";
//       }
  
//       if (status === "pending") {
//         return "";
//       }
  
//       if (status === "error") {
//         return "Error Loading";
//       } else {
//         console.log("showRecipe working");
//         return recipes.map((recipe) => {
//           return <RecipeCard recipe={recipe} />;
//         });
//       }
//     };
  
//     console.log("fetchAPI: ", fetchAPI);
//     console.log("ingredients: ", ingredients);
  
//     return (
//       <div>
//         <div className={classes.header}>
//           <Typography
//             className={classes.h1}
//             variant="h3"
//             align="center"
//             gutterBottom
//           >
//             What's in your fridge?
//           </Typography>
//           <Typography
//           variant="h6"
//           align="center"
//           gutterBottom>
//           Type in your available ingredients
//           </Typography>
//           <Container>
//             <form noValidate autoComplete="off">
//               <TextField
//                 className={classes.field}
//                 variant="outlined"
//                 fullWidth
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchRoundedIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 placeholder="Apples, Flour, Sugar"
//                 value={ingredients}
//                 onChange={handleChange}
//               />
//             </form>
  
//             <Button
//               className={classes.btn}
//               style={{ color: "white" }}
//               variant="primary"
//               onClick={getRecipes}
//             >
//               Show Me Recipes
//             </Button>
//           </Container>
//         </div>
//         <br /> <br />
//         <Container>
//         <Grid container spacing={2}>
//               <ShowRecipe />
//         </Grid>
//         </Container>
//       </div>
//     );
//   };
  
//   export default InputForm;