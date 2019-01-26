import React from 'react'
import Aux from '../../../hoc/auxillary';

const orderSummary =(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(iGKey=>
        {
            return(
                <li key={iGKey}>
                    <span style={{textTransform: 'capitalize'}}>{iGKey}:</span> {props.ingredients[iGKey]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary }
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
}

export default orderSummary;