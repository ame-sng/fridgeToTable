// import React, { useState, useEffect } from "react";

// const FetchRecipes = ({ingredients}) => {
//   const [status, setStatus] = useState("idle");
//   const [recipes, setRecipes] = useState(null);

//   const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=2&apiKey=${process.env.REACT_APP_APIKEY}`;

//   useEffect(() => {
//     setStatus("pending");
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("Bad Response from Server");
//       })
//       .then((data) => {
//         setStatus("resolved");
//         console.log("2 recipe cards: ", data[0]);
//         setRecipes(data[0]);
//       })
//       .catch((error) => {
//         setStatus("error");
//       });
//   }, [ingredients]);

//     if (status === "idle") {
//       return "Please enter an ingredient";
//     }

//     if (status === "pending") {
//       return "Loading...";
//     }

//     if (status === "error") {
//       return "Error Loading";
//     }
  
//   return (
//     <div>
//       <h2>{recipes}</h2>
//     </div>
//   );
// };

// export default FetchRecipes;
