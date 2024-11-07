const IngredientList = (props) => {
    console.log("ingredinet list", props)

  
    return(
        <ul>
            {/* Map through props.ingredients */}
            {props.availableIngredients.map((ingredient) => 
                <li key={ingredient.name} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={()=>props.addToBurger(ingredient)}>+</button>
                </li>
            )}
        </ul>
    )
}

export default IngredientList