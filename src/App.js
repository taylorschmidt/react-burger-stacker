import React, {useState} from 'react';
import './css/App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';


function App() {
  const [ingredient, setIngredient] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]);

  const [burgerStack, setBurgerStack] = useState([])

  const addIngredient = (e, addedIngredient) => {
    e.preventDefault();
    setBurgerStack([addedIngredient, ...burgerStack])
  }

  function clearBurger(e) {
    setBurgerStack([])
  }



  return (
    <div className="App">
      <div>
      <h2>Make a Burger!</h2>
       
      <IngredientList ingredient={ingredient} addIngredient={addIngredient}/>
      </div>
      <div>
      <BurgerPane burgerStack={burgerStack} clearBurger={clearBurger}/>
      </div>
      </div>
  )
}

export default App;