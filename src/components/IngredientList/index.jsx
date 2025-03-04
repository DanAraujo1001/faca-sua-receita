import Button from "../Button";
import './styles.css';

const IngredientList = ({ array, clearFunction, confirmFunction }) => {
    return (
    <div className="container__right__ingredients">
        <h2>Ingredientes</h2>
        {array.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <div className="ingredients__buttom">
            <Button className="ingredient-buttom limpar" value="Limpar" src="../../public/trash-icon.png" onClick={clearFunction}/>
            <Button className="ingredient-buttom confirmar" value="Confirmar" src="../../public/baker-icon.png" onClick={confirmFunction}/>
        </div>
    </div>
    )
}

export default IngredientList