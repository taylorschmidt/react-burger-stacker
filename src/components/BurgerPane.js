import React from "react";
import BurgerStack from "./BurgerStack"
import ClearBurger from "./ClearBurger"


const BurgerPane = ({burgerStack, clearBurger}) => {
  return (
    <>
    <h2>My Burger:</h2>
        <BurgerStack burgerStack={burgerStack}/>
        <ClearBurger clearBurger={clearBurger}/>
    </>
 
  )
};

export default BurgerPane;
