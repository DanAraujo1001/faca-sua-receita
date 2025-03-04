import { useState } from "react"; 
import { recipes } from "./data/receitas.json";
import Button from "./components/Button";
import IngredientList from "./components/IngredientList";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [previousRecipe, setPreviousRecipe] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [classDinamicHeight, setClassDinamicHeight] = useState('');

  const handleAddIngredient = (ingredient) => {
    if (ingredients.length < 3 && !ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => {
        const newIngredients = [...prevIngredients, ingredient];
        return newIngredients;
      })
    }
  }

  const handleShowRecipe = () => {
    if (ingredients.length === 3) {
      for (let i = 0; i < recipes.length; i++) {
        let currentRecipe = recipes[i].ingredients;
        if ([...ingredients].sort().every((item, index) => item === [...currentRecipe].sort()[index])) {
          setPreviousRecipe(recipes[i].name);
          setRecipeImage(recipes[i].imagem);
          console.log(i);
          if (i === 2 || i === 3 || i === 6 || i === 8) {
            console.log("PASSOU")
            setClassDinamicHeight('plate--different-margin')
          }
        }
      }
    } 
  }

  const handleClearIngredients = () => {
    setIngredients([]);
    setPreviousRecipe('');
    setRecipeImage('');
    setClassDinamicHeight('');
  }

  return (
    <div className="container">
      <div className="container__left">
        <h2>{`>> ${previousRecipe} <<`}</h2>
        <span className="container__left__plate">
          <img className={classDinamicHeight} src={`../public/${recipeImage}`} alt="" />
        </span>
        <div className="container__left__buttons">
          <Button className="container__left__buttons__button" value="Chocolate" src="../public/icons-button/chocolate.png" onClick={() => {handleAddIngredient("Chocolate")}} />
          <Button className="container__left__buttons__button" value="Leite Condensado" src="../public/icons-button/leite-condensado.png" onClick={() => {handleAddIngredient("Leite Condensado")}} />
          <Button className="container__left__buttons__button" value="Morango" src="../public/icons-button/morango.png" onClick={() => {handleAddIngredient("Morango")}} />
          <Button className="container__left__buttons__button" value="Coco Ralado" src="../public/icons-button/coco.png" onClick={() => {handleAddIngredient("Coco Ralado")}} />
          <Button className="container__left__buttons__button" value="Biscoito" src="../public/icons-button/biscoito.png" onClick={() => {handleAddIngredient("Biscoito")}} />
        </div>
      </div>
      <div className="container__right">
        <IngredientList array={ingredients} clearFunction={handleClearIngredients} confirmFunction={handleShowRecipe} />
        <p className="container__right__text-description">
          Combine três ingredientes diferentes e encontre a sobremesa que você está procurando! Teste as possibilidades ;). 
        </p>
      </div>
    </div>
  );
}

export default App;
