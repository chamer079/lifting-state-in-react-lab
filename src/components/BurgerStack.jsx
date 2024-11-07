const BurgerStack = (props) => {
    return(
        <ul>
            {/* Map through props.ingredients */}
             {props.stack.map((ingredient, idx) => (
                <li key={idx} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={()=>props.removeFromBurger(ingredient)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default BurgerStack