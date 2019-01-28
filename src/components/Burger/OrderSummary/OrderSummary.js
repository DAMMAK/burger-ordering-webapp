import React from 'react'
import Aux from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Prics: {props.totalPrice}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" click={props.cancelOrder}>CANCEL</Button>
            <Button btnType="Success" click={props.continueOrder}>CHECK OUT</Button>

        </Aux>
    );
}

export default orderSummary;