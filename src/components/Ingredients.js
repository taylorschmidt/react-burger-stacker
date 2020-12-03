//takes ingredients from IngredidentList state so that they can be passed to BurgerPane

import React, { useState, useEffect } from "react";

const Ingredients = ({ chosenIngredients }) => {
  return (
    <>
      Invisible Ingredient State Here!!:
      {chosenIngredients &&chosenIngredients.map((ingredient) => (
        <div>{ingredient}</div>
      ))}
    </>
  );
};

export default Ingredients;
