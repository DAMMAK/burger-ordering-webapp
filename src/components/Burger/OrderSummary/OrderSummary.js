import React, {Component} from 'react'
import Aux from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentWillUpdate()
    {
        console.log('[Order Summary] WillUpdate');
    }
    render()
    {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(iGKey=>
            {
                return(
                    <li key={iGKey}>
                        <span style={{textTransform: 'capitalize'}}>{iGKey}:</span> {this.props.ingredients[iGKey]}
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
                    <p><strong>Total Prics: {this.props.totalPrice}</strong></p>
                    <p>Continue to checkout?</p>
                    <Button btnType="Danger" click={this.props.cancelOrder}>CANCEL</Button>
                    <Button btnType="Success" click={this.props.continueOrder}>CHECK OUT</Button>
        
                </Aux>
            );
    }
    

    
}

export default OrderSummary;