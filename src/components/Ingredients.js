//takes ingredients from IngredidentList state so that they can be passed to BurgerPane

import React, { useState, useEffect } from "react";

const Ingredients = ({ingredient , addIngredient}) => {
    
    return (
        <>
        List of Available Burger Ingredients:
          <ul>
            {ingredient.map((item, index) => (
              <li key={`item-${index}`}>
                {item.name}
                <button
                  onClick={(e) => {
                    addIngredient(e, item);
                  }}
                >
                  Add to Burger
                </button>
              </li>
            ))}
          </ul>
        </>
      );
      
};

export default Ingredients;
