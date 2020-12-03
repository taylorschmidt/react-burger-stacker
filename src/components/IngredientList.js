import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients"


const IngredientList = () => {

const [ingredients, setIngredients] = useState([
{ name: "Kaiser Bun", color: "saddlebrown" },
{ name: "Sesame Bun", color: "sandybrown" },
{ name: "Gluten Free Bun", color: "peru" },
{ name: "Lettuce Wrap", color: "olivedrab" },
{ name: "Beef Patty", color: "#3F250B" },
{ name: "Soy Patty", color: "#3F250B" },
{ name: "Black Bean Patty", color: "#3F250B" },
{ name: "Chicken Patty", color: "burlywood" },
{ name: "Lettuce", color: "lawngreen" },
{ name: "Tomato", color: "tomato" },
{ name: "Bacon", color: "maroon" },
{ name: "Onion", color: "lightyellow" },
])

const [chosenIngredients, setChosenIngredients] = useState([])


const addIngredient = (chosenIngredient) => {
  console.log(chosenIngredient)
  setChosenIngredients([chosenIngredient, ...chosenIngredients])
}


console.log(chosenIngredients)
  return (
  <>
  <div>Ingredient List</div>
  
    {ingredients.map(ingredient => (<div>{ingredient.name} <button onClick={()=> addIngredient(ingredient.name)} >Add to Burger</button></div>))} 
    
    <Ingredients chosenIngredients={chosenIngredients}/>
    <div> ......... </div>
  </>
  )
};

export default IngredientList;
